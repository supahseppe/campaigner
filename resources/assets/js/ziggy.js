    var Ziggy = {
        namedRoutes: {"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"],"domain":null},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.telescope":{"uri":"_debugbar\/telescope\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"],"domain":null},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"],"domain":null},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"],"domain":null},"telescope":{"uri":"telescope\/{view?}","methods":["GET","HEAD"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"password\/email","methods":["POST"],"domain":null},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"password\/reset","methods":["POST"],"domain":null},"password.confirm":{"uri":"password\/confirm","methods":["GET","HEAD"],"domain":null},"page.welcome":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"home":{"uri":"home","methods":["GET","HEAD"],"domain":null},"page.about":{"uri":"about","methods":["GET","HEAD"],"domain":null},"page.contact":{"uri":"contact","methods":["GET","HEAD"],"domain":null},"campaigns.initial":{"uri":"campaigns\/initial","methods":["GET","HEAD"],"domain":null},"campaigns.index":{"uri":"campaigns","methods":["GET","HEAD"],"domain":null},"campaigns.create":{"uri":"campaigns\/create","methods":["GET","HEAD"],"domain":null},"campaigns.store":{"uri":"campaigns","methods":["POST"],"domain":null},"campaigns.show":{"uri":"campaigns\/{campaign}","methods":["GET","HEAD"],"domain":null},"campaigns.edit":{"uri":"campaigns\/{campaign}\/edit","methods":["GET","HEAD"],"domain":null},"campaigns.update":{"uri":"campaigns\/{campaign}","methods":["PUT","PATCH"],"domain":null},"campaigns.destroy":{"uri":"campaigns\/{campaign}","methods":["DELETE"],"domain":null},"characters.in_campaign":{"uri":"campaign\/{campaign}\/characters","methods":["GET","HEAD"],"domain":null},"characters.index":{"uri":"characters","methods":["GET","HEAD"],"domain":null},"characters.create":{"uri":"characters\/create","methods":["GET","HEAD"],"domain":null},"characters.store":{"uri":"characters","methods":["POST"],"domain":null},"characters.show":{"uri":"characters\/{character}","methods":["GET","HEAD"],"domain":null},"characters.edit":{"uri":"characters\/{character}\/edit","methods":["GET","HEAD"],"domain":null},"characters.update":{"uri":"characters\/{character}","methods":["PUT","PATCH"],"domain":null},"characters.destroy":{"uri":"characters\/{character}","methods":["DELETE"],"domain":null},"npcs.index":{"uri":"npcs","methods":["GET","HEAD"],"domain":null},"npcs.create":{"uri":"npcs\/create","methods":["GET","HEAD"],"domain":null},"npcs.store":{"uri":"npcs","methods":["POST"],"domain":null},"npcs.show":{"uri":"npcs\/{npc}","methods":["GET","HEAD"],"domain":null},"npcs.edit":{"uri":"npcs\/{npc}\/edit","methods":["GET","HEAD"],"domain":null},"npcs.update":{"uri":"npcs\/{npc}","methods":["PUT","PATCH"],"domain":null},"npcs.destroy":{"uri":"npcs\/{npc}","methods":["DELETE"],"domain":null},"factions.index":{"uri":"factions","methods":["GET","HEAD"],"domain":null},"factions.create":{"uri":"factions\/create","methods":["GET","HEAD"],"domain":null},"factions.store":{"uri":"factions","methods":["POST"],"domain":null},"factions.show":{"uri":"factions\/{faction}","methods":["GET","HEAD"],"domain":null},"factions.edit":{"uri":"factions\/{faction}\/edit","methods":["GET","HEAD"],"domain":null},"factions.update":{"uri":"factions\/{faction}","methods":["PUT","PATCH"],"domain":null},"factions.destroy":{"uri":"factions\/{faction}","methods":["DELETE"],"domain":null},"locations.index":{"uri":"locations","methods":["GET","HEAD"],"domain":null},"locations.create":{"uri":"locations\/create","methods":["GET","HEAD"],"domain":null},"locations.store":{"uri":"locations","methods":["POST"],"domain":null},"locations.show":{"uri":"locations\/{location}","methods":["GET","HEAD"],"domain":null},"locations.edit":{"uri":"locations\/{location}\/edit","methods":["GET","HEAD"],"domain":null},"locations.update":{"uri":"locations\/{location}","methods":["PUT","PATCH"],"domain":null},"locations.destroy":{"uri":"locations\/{location}","methods":["DELETE"],"domain":null},"tasks.index":{"uri":"tasks","methods":["GET","HEAD"],"domain":null},"tasks.create":{"uri":"tasks\/create","methods":["GET","HEAD"],"domain":null},"tasks.store":{"uri":"tasks","methods":["POST"],"domain":null},"tasks.show":{"uri":"tasks\/{task}","methods":["GET","HEAD"],"domain":null},"tasks.edit":{"uri":"tasks\/{task}\/edit","methods":["GET","HEAD"],"domain":null},"tasks.update":{"uri":"tasks\/{task}","methods":["PUT","PATCH"],"domain":null},"tasks.destroy":{"uri":"tasks\/{task}","methods":["DELETE"],"domain":null}},
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
