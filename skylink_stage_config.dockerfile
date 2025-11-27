
<VirtualHost *:80>
    ServerName stage.skylink.net.in
    ServerAlias www.stage.skylink.net.in

    # Proxy for HTTP requests
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/

    # Proxy WebSocket connections
    ProxyPass "/_next/webpack-hmr"  "ws://127.0.0.1:3000/_next/webpack-hmr"
    ProxyPassReverse "/_next/webpack-hmr" "ws://127.0.0.1:3000/_next/webpack-hmr"

    ProxyPass "/socket.io"  "ws://127.0.0.1:3000/socket.io"
    ProxyPassReverse "/socket.io" "ws://127.0.0.1:3000/socket.io"

    ErrorLog ${APACHE_LOG_DIR}/stage-next-error.log
    CustomLog ${APACHE_LOG_DIR}/stage-next-access.log combined
RewriteEngine on
RewriteCond %{SERVER_NAME} =stage.skylink.net.in [OR]
RewriteCond %{SERVER_NAME} =www.stage.skylink.net.in
RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
</VirtualHost>



<VirtualHost *:443>
    ServerName stage.skylink.net.in
    ServerAlias www.stage.skylink.net.in

    # Enable SSL
    SSLEngine on

    # Proxy for HTTP requests
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/

    # Proxy WebSocket connections
    ProxyPass "/_next/webpack-hmr" "ws://127.0.0.1:3000/_next/webpack-hmr"
    ProxyPassReverse "/_next/webpack-hmr" "ws://127.0.0.1:3000/_next/webpack-hmr"

    ProxyPass "/socket.io"  "ws://127.0.0.1:3000/socket.io"
    ProxyPassReverse "/socket.io" "ws://127.0.0.1:3000/socket.io"

    # Logs
    ErrorLog ${APACHE_LOG_DIR}/stage-next-error.log
    CustomLog ${APACHE_LOG_DIR}/stage-next-access.log combined
    Include /etc/letsencrypt/options-ssl-apache.conf
    # SSLCertificateFile /etc/letsencrypt/live/stage.skylink.net.in/fullchain.pem
    # SSLCertificateKeyFile /etc/letsencrypt/live/stage.skylink.net.in/privkey.pem
SSLCertificateFile      /home/skydev/crt/fullchain.crt
SSLCertificateKeyFile   /home/skydev/crt/betaskylink.key
SSLCertificateChainFile /home/skydev/crt/betaskylinkintermediate.ca

</VirtualHost>