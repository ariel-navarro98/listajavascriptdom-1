<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar produto</title>
    <style>
        *{
            font-family: "Fira Sans", sans-serif;
        }

        body{
            background-color: #171718;
            color:  #ffffff;
        }

        .container {
            margin: auto;
            width: 60%;
            height: auto;
            margin-top: 150px;
            min-width: 330px;
            padding: 53px;
            border-radius: 8px;
            background-color: #252525;
            box-shadow: 0px 0px 10px #00000098;
            display: flex;
            padding-bottom: 150px;
            margin-bottom: 20px;
        }
        .content{
            justify-content: left; 
            width: 70%;
            margin-right: auto;
            margin-left: auto;
        }
        input[type=text], input[type=number]{
            color: #ffffff;
            width: 100%;
            height: 45px;
            margin: 8px 0;
            box-sizing: border-box;
            border: 1px solid rgb(0, 0, 0);
            border-radius: 4px;
            font-size: 16px;
            padding-left : 20px;
            box-shadow: inset 0 0 10px #0000003d;
            background-color: #222222;
        }

        button[type=submit]{
            background-color: #4c0b78;
            width: 100%;
            height: 45px;
            border: none;
            border-radius: 4px;
            color: rgb(255, 255, 255);
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 0px;
            transition-duration: 0.4s;
            cursor: pointer;
        }
</style>
</head>
<body>
    <div class="container">
        <div class="content">
            <form method="post" class="form">
                <h2>Cadastrar Produto</h2>
                    <label for="nome_produto">Nome do Produto</label><br>
                    <input type="text" id="nome_produto" name="nome_produto" required>
                    <br><br>

                    <label for="marca">Marca</label><br>
                    <input type="text" id="marca" name="marca" required>
                    <br><br>

                    <label for="qtd_estoque">Quantidade no Estoque</label><br>
                    <input type="number" id="qtd_estoque" step="1" name="qtd_estoque" required>
                    <br><br>

                    <label for="preco">Preço</label><br>
                    <input type="number" id="preco" step="0.01" name="preco" required>
                    <br><br>

                    <label for="tipo">Tipo</label><br>
                    <input type="text" id="tipo" name="tipo" required>
                    <br><br>

                    <label for="descricao">Descrição</label><br>
                    <input type="text" id="descricao" name="descricao" required>
                    <br><br>

                    <button type="submit" class="btn" value="Cadastrar">Cadastrar</button>
                </form>
            </div>
    </div>
</body>
</html>

<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $sql = mysqli_connect("localhost", "root", "", "loja_bd");

    $nome_produto = $_POST['nome_produto'];
    $marca = $_POST['marca'];
    $qtd_estoque = $_POST['qtd_estoque'];
    $preco = $_POST['preco'];
    $tipo = $_POST['tipo'];
    $descricao = $_POST['descricao'];
    mysqli_query($sql, "insert into lojatb (nome_produto, marca, qtd_estoque, preco, tipo, descricao) VALUES ('$nome_produto', '$marca', '$qtd_estoque', '$preco', '$tipo', '$descricao')");
  }
?>
