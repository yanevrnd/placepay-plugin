# Placepay plugin
Install all dependencies with `npm install`

Set the public key as a value to attribute `data-key` in `index.pug`

Run the project with `npm run dev` and open http://localhost:8000

### Issue:

If you change the `data-key` attribute in `index.pug` file to use the private key the form is embedded correctly but according to [Placepay documentation](https://developer.placepay.com/?javascript#pay-plugin) the public key must be used in order to render the plugin.
```<form action="/path/to/your/post/method" method="POST">
  <script
    src="https://placepay.com/plugins/pay.js"
    data-key={PUBLIC_KEY}
    data-amount="1000.00"
    data-description="First Month's Rent">
  </script>
</form>
