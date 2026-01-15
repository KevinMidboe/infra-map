#!/bin/sh
set -e

# Generate VCL at runtime
gomplate -f /etc/varnish/default.vcl.tmpl -o /etc/varnish/default.vcl

# Execute startup CMD
exec varnishd -F -f /etc/varnish/default.vcl -a :6081 -s malloc,512m
