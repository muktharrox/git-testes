//Esse e o meu arquivo principal
Ext.define('Tocadobicho.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    //TESTE
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Map'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype:'home'
            },
            {
                xtype:'horario'
            },
            {
                xtype:'localizacao'
            },
            {
                xtype:'veterinario'
            },
            {
                xtype:'loja'
            }
        ]
    }
});
