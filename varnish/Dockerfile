FROM debian:bullseye

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl gnupg apt-transport-https lsb-release \
    build-essential git autoconf libtool python3-docutils \
    libmhash-dev pkg-config

# Add Varnish Software repo
RUN curl -fsSL https://packagecloud.io/varnishcache/varnish73/gpgkey | gpg --dearmor -o /usr/share/keyrings/varnish.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/varnish.gpg] https://packagecloud.io/varnishcache/varnish73/debian/ $(lsb_release -cs) main" \
    > /etc/apt/sources.list.d/varnish.list

# Install Varnish + dev headers
RUN apt-get update && apt-get install -y varnish varnish-dev

# Build libvmod-digest
RUN git clone https://github.com/varnish/libvmod-digest.git /opt/libvmod-digest && \
    cd /opt/libvmod-digest && \
    ./autogen.sh && \
    ./configure VARNISHSRC=/usr/include/varnish && \
    make && make install

COPY --from=hairyhenderson/gomplate:stable /gomplate /bin/gomplate

COPY default.vcl.tmpl /etc/varnish/
COPY *.vcl /etc/varnish/
COPY includes /etc/varnish/includes

ARG PROXY_HOST=$PROXY_HOST
ARG IMAGE_HOST=$IMAGE_HOST

RUN gomplate -f /etc/varnish/default.vcl.tmpl -o /etc/varnish/default.vcl
RUN rm /etc/varnish/default.vcl.tmpl

EXPOSE 6081

CMD ["varnishd", "-F", "-f", "/etc/varnish/default.vcl", "-a", ":6081", "-s", "malloc,512m"]

