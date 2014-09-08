Ext.define('Tocadobicho.view.loja.Loja',{
    extend:'Ext.Panel',
    xtype:'loja',

    config:{
        title:'Loja',//Titulo da pagina
        iconCls:'tags' ,//Qual o icone que vai
        layout:'fit',//qual o tipo de layout que esta sendo dispnibilizado,
        scrollable:true,//indica se vai ter scroll nessa pagina
        styleHtmlContent:true, //habilita o conteudo HTML da pagina
        styleHtmlCls:'homepage',//define um estilo da index para aplicar a esse HTML
        items:[
            {
                xtype:'titlebar',
                title:'Loja',
                docked:'top'
            } ,
            {
                xtype:'list',
                store:'Lojas',
                itemTpl:'<h1>{produto}</h1><p>{descricao} - <span>R$ {preco}</span></p>'
            }
        ]
    }
})
