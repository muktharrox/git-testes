Ext.define('Tocadobicho.view.localizacao.Localizacao',{
    extend:'Ext.Panel',
    xtype:'localizacao',

    config:{
        title:'Localização',//Titulo da pagina
        iconCls:'maps' ,//Qual o icone que vai
        layout:'fit',//qual o tipo de layout que esta sendo dispnibilizado,
        scrollable:true,//indica se vai ter scroll nessa pagina
        styleHtmlContent:true, //habilita o conteudo HTML da pagina
        styleHtmlCls:'homepage',//define um estilo da index para aplicar a esse HTML
        mapOptions : {
            center : new google.maps.LatLng(27.639305, -48.652849),  //nearby San Fran
            zoom : 12,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT
            }
        },
        items:[
            {
                xtype:'titlebar',
                title:'Localização',
                docked:'top'
            } ,
            {
                xtype: 'map',
                useCurrentLocation: true
            }
        ]
    }
})
