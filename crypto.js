 
        let btc = document.getElementById("bitcoin");
        let eth = document.getElementById("ethereum");
        let doge = document.getElementById("dogecoin");
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.coinlore.net/api/tickers/?id=90,80,5",
            "method": "GET",
            "headers": {}
        }
        
        $.ajax(settings).done(function (response) {
            const bitcoinData = response.data[0];
            const ethereumData = response.data[1];
            const dogecoinData = response.data[2];
           
        
            if (bitcoinData && ethereumData && dogecoinData) {
                btc.innerHTML = `$${bitcoinData.price_usd}`;
                eth.innerHTML = `$${ethereumData.price_usd}`;
                doge.innerHTML = `$${dogecoinData.price_usd}`;
            } else {
                btc.innerHTML = "Price not available";
                eth.innerHTML = "Price not available";
                doge.innerHTML = "Price not available";
            }
        });