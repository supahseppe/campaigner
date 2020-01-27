    var Ziggy = {
        namedRoutes: {"telescope":{"uri":"telescope\/{view?}","methods":["GET","HEAD"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"password\/email","methods":["POST"],"domain":null},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"password\/reset","methods":["POST"],"domain":null},"password.confirm":{"uri":"password\/confirm","methods":["GET","HEAD"],"domain":null},"welcome":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"home":{"uri":"home","methods":["GET","HEAD"],"domain":null},"page.about":{"uri":"about","methods":["GET","HEAD"],"domain":null},"page.contact":{"uri":"contact","methods":["GET","HEAD"],"domain":null},"campaigns.index":{"uri":"campaigns","methods":["GET","HEAD"],"domain":null},"campaigns.create":{"uri":"campaigns\/create","methods":["GET","HEAD"],"domain":null},"campaigns.store":{"uri":"campaigns","methods":["POST"],"domain":null},"campaigns.show":{"uri":"campaigns\/{campaign}","methods":["GET","HEAD"],"domain":null},"campaigns.edit":{"uri":"campaigns\/{campaign}\/edit","methods":["GET","HEAD"],"domain":null},"campaigns.update":{"uri":"campaigns\/{campaign}","methods":["PUT","PATCH"],"domain":null},"campaigns.destroy":{"uri":"campaigns\/{campaign}","methods":["DELETE"],"domain":null},"characters.index":{"uri":"characters","methods":["GET","HEAD"],"domain":null},"characters.create":{"uri":"characters\/create","methods":["GET","HEAD"],"domain":null},"characters.store":{"uri":"characters","methods":["POST"],"domain":null},"characters.show":{"uri":"characters\/{character}","methods":["GET","HEAD"],"domain":null},"characters.edit":{"uri":"characters\/{character}\/edit","methods":["GET","HEAD"],"domain":null},"characters.update":{"uri":"characters\/{character}","methods":["PUT","PATCH"],"domain":null},"characters.destroy":{"uri":"characters\/{character}","methods":["DELETE"],"domain":null}},
        baseUrl: 'https://campaigner.test/',
        baseProtocol: 'https',
        baseDomain: 'campaigner.test',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
