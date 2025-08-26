# --- Stage 1: Compile varnish w/ vmods ---
FROM debian:bullseye-slim AS builder

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

# --- Stage 2: Runtime image ---
FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y \
    curl gnupg apt-transport-https lsb-release && \
    curl -fsSL https://packagecloud.io/varnishcache/varnish73/gpgkey | gpg --dearmor -o /usr/share/keyrings/varnish.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/varnish.gpg] https://packagecloud.io/varnishcache/varnish73/debian/ $(lsb_release -cs) main" \
    > /etc/apt/sources.list.d/varnish.list && \
    apt-get update && apt-get install -y varnish libmhash2 && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy VMOD from builder
COPY --from=builder /usr/lib/varnish/vmods/* /usr/lib/varnish/vmods/

# Copy gomplate from official image
COPY --from=hairyhenderson/gomplate:stable /gomplate /bin/gomplate

# Copy configuration
COPY default.vcl.tmpl /etc/varnish/
COPY *.vcl /etc/varnish/
COPY includes /etc/varnish/includes

# Create entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 6081
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
