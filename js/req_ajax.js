window.onload = function() {
    carrega_dados_json();
}

function carrega_dados_json() {

    document.getElementById("btn_1").onclick = function() {
        var tasAjax = abreAjax();
        
        tasAjax.open('GET', "dados_cliente.php", true);
        tasAjax.onreadystatechange = function ()
        {
            if(tasAjax.readyState == 1)
            {
                //document.getElementById("carregar-aqui").innerHTML = "Carregando...";          
            }            
            if(tasAjax.readyState == 4)
            {
                if(tasAjax.status == 200)
                {
                    var obj = JSON.parse(tasAjax.responseText);

                    document.getElementById("nome").value = obj[0].nome;
                    document.getElementById("idade").value = obj[0].idade;
                    document.getElementById("profissao").value = obj[0].profissao;
                }
            }
        };
        tasAjax.send(null);	
    }


    document.getElementById("btn_2").onclick = function() {
        var tasAjax = abreAjax();
        
        tasAjax.open('GET', "dados_cliente.php", true);
        tasAjax.onreadystatechange = function ()
        {
            if(tasAjax.readyState == 1)
            {
                //document.getElementById("carregar-aqui").innerHTML = "Carregando...";          
            }            
            if(tasAjax.readyState == 4)
            {
                if(tasAjax.status == 200)
                {
                    var obj = JSON.parse(tasAjax.responseText);

                    document.getElementById("nome").value = obj[1].nome;
                    document.getElementById("idade").value = obj[1].idade;
                    document.getElementById("profissao").value = obj[1].profissao;
                }
            }
        };
        tasAjax.send(null);	
    }
}