Ext.define('Tocadobicho.view.veterinarios.Veterinario',{
    extend:'Ext.Panel',
    xtype:'veterinario',
    config:{
        title:'Veterinarios',//Titulo da pagina
        iconCls:'team' ,//Qual o icone que vai
        layout:'fit',//qual o tipo de layout que esta sendo dispnibilizado,
        scrollable:true,//indica se vai ter scroll nessa pagina
        styleHtmlContent:true, //habilita o conteudo HTML da pagina
        styleHtmlCls:'homepage',//define um estilo da index para aplicar a esse HTML

        html:['<br><br><br><h1>Veterinarios</h1>',
        '<hr>',
        '<p>Confira nossos veterinarios</p>'].join("")  ,

        items:[
            {
                xtype:'titlebar',
                title:'Veterinario',
                docked:'top'
            }
        ]
    }
})
