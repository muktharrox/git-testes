Ext.define('Tocadobicho.view.horario.Horario',{
    extend:'Ext.Panel',
    xtype:'horario',
    config:{
        title:'Horario',//Titulo da pagina
        iconCls:'time' ,//Qual o icone que vai
        layout:'fit',//qual o tipo de layout que esta sendo dispnibilizado,
        scrollable:true,//indica se vai ter scroll nessa pagina
        styleHtmlContent:true, //habilita o conteudo HTML da pagina
        styleHtmlCls:'homepage',//define um estilo da index para aplicar a esse HTML

        html:['<br><br><br><h1>Horario de Atendimento</h1><br>',
        '<p>segunda-feira	09:00–19:00</p>',
            '<p>segunda-feira	09:00–19:00</p>',
            '<p>terça-feira	    09:00–19:00</p>',
            '<p>quarta-feira	09:00–19:00</p>',
            '<p>quinta-feira	09:00–19:00</p>',
            '<p>sexta-feira	    09:00–19:00</p>',
            '<p>sábado	        09:00–17:00</p>',
            '<p>domingo	        Fechado</p>'].join("")  ,

        items:[
            {
                xtype:'titlebar',
                title:'Horario de Atendimento',
                docked:'top'
            }
        ]
    }
})
