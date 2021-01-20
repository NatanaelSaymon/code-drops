# TABLE (HTML5)

O elemento table serve para fazer a organização de dados.

Pros
- Visualização de dados via linhas e colunas.
- Boa acessibilidade para leitura de dados.

Contras
- Pouco flexível.
- Precisa de estilização para melhor visualização.
<br>
<br>

## Tabela Basica

````html
<!-- TABELA BASICA -->
<table>
    <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Sexo</th>
    </tr>
    <tr>
        <td>Natan</td>
        <td>29</td>
        <td>Masculino</td>
    </tr>
    <tr>
        <td>Suellen</td>
        <td>29</td>
        <td>Feminino</td>
    </tr>
</table>
<!-- FIM TABELA BASICA -->
````
<br><br>

## Organizando a tabela

````html
<!-- ORGANIZANDO TABELAS -->
<table>
    <caption>Caracteristicas de Pessoas</caption>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Sexo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Natan</td>
            <td>29</td>
            <td>Masculino</td>
        </tr>
        <tr>
            <td>Suellen</td>
            <td>29</td>
            <td>Feminino</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total: </td>
            <td>2 pessoas</td>
        </tr>
    </tfoot>
</table>
<!-- FIM ORGANIZANDO TABELAS -->
````
Descricoes de algumas propriedades inseridas na tabela:
- caption: Descreve o que a tabela faz.
- thead: Cabecalho da tabela.
- tbody: Corpo da tabela.
- tfoot: rodape da tabela.

<br><br>

## Tabela Complexa

````html
 <table>
    <caption>Produzidos x Vendidos por Loja</caption>

    <colgroup>
        <col>
        <col span="2" style="background-color: #6dcfe3;">
        <col span="2" style="background-color: #72a868;">
    </colgroup>
    
    <thead>
        <tr>
            <th rowspan="2"></th>
            <th colspan="2" scope="colgroup">Itaim</th>
            <th colspan="2" scope="colgroup">Itaquera</th>
        </tr>

        <tr>
            <th scope="col">Produzidos</th>
            <th scope="col">Vendidos</th>
            <th scope="col">Produzidos</th>
            <th scope="col">Vendidos</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <th scope="row">Nescau</th>
            <td>40</td>
            <td>20</td>
            <td>90</td>
            <td>88</td>
        </tr>
        <tr>
            <th scope="row">Chocolate</th>
            <td>100</td>
            <td>96</td>
            <td>63</td>
            <td>41</td>
        </tr>
        <tr>
            <th scope="row">Sobremesa</th>
            <td>77</td>
            <td>50</td>
            <td>54</td>
            <td>20</td>
        </tr>
    </tbody>
</table>
<!-- FIM TABELA COMPLEXA -->
````

Descricoes de algumas propriedades inseridas na tabela:

- Colgroup tras mais acessibilidade e um melhor agrupamento de informacoes e melhora o SEO.
- Dentro da tag colgroup, existe uma tag chamada de col. A col significa cada coluna que temos em nossa tabela.
- Dentro da col podemos adicionar estilos e o span significa a quantidade de colunas que queremos inserir o estilo.
- Melhorando a acessibilidade da tabela para os leitores de tela do google:
- Usaremos uma propriedade chamada de "scope". O scope tem 4 opcoes: colgroup, rowgroup, row, col.
- As lojas teram um scope="colgroup". Pois estamos fazendo um agrupamento de coluna
- Ainda no thead, os outros cabecalhos como: produzidos e vendidos, teram um scope de coluna.
- Ja no tbody os titulos Nescau, chocolate e sobremesas, teram um scope de linha.

