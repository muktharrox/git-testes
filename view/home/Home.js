Ext.define('Tocadobicho.view.home.Home',{
    extend:'Ext.Panel',
    xtype:'home',
    config:{
        title:'Home',//Titulo da pagina
        iconCls:'home' ,//Qual o icone que vai
        layout:'fit',//qual o tipo de layout que esta sendo dispnibilizado,
        scrollable:true,//indica se vai ter scroll nessa pagina
        styleHtmlContent:true, //habilita o conteudo HTML da pagina
        styleHtmlCls:'homepage',//define um estilo da index para aplicar a esse HTML

        html:['<br><br><br><h1>Toca do Bicho Agropet</h1>',
        '<hr>',
        '<p>Av. Aniceto Zacchi, 1017 Palhoça - SC 88130-301</p>',
        '<p>Telefone: <a href="tel:(48) 3344-0266">(48) 3344-0266</a></p>',
        '<p>Pet Shop, atendimento Veterinário, estética animal</p>'].join("")  ,

        items:[
            {
                xtype:'titlebar',
                title:'Home',
                docked:'top'
            }
        ]
    }
})
