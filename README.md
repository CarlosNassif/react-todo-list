# TO-DOs

Projeto feito para a disciplina de Técnicas Avançadas de Css durante a pós graduação em Desenvolvimento Web Frontend pela PUC Minas.

## Layout escolhido

O projeto segue com uma única tela, onde o usuário pode registrar suas tarefas, marcá-las como feitas ou apagar as tarefas.

## Arquitetura Estrutural

A tela desenhada foi destrinchada em três principais componentes:

- App -> Componente principal;
- TodoList -> Lista de tarefas;
- TodoItem -> Item de tarefa.

### App

Dentro desse componente, temos o título da página, uma área de inserção de novas tarefas, chamada do componente de listar as tarefas, e botão para limpar a lista.

### TodoList

Nesse componente existe a chamada dos componentes de Item de tarefa (TodoItem) a partir da lista de tarefas. Também existe uma contagem dos itens já feitos, bem como a lógica para marcar e desmarcar os itens como concluídos.

### TodoItem

Nesse componente temos apenas a exibição do item, no formato do campo de checkbox junto do texto que descreve a tarefa.

## Arquitetura de Estilos

Todos os componentes supracitados foram feitos utilizando o styled-components. A utilização desse biblioteca se deu devido ao conhecimento adquirido durante o curso da disciplina e também para fixá-lo.

Dentro do código, temos diversos estilos feitos a partir do styled-component. Esses estilos estão localizados dentro da pasta `/components/styles/`.

Lista de todos os componentes:

- Button
- FlexContainer
- FlexContainerCentered
- FlexContainerStart
- Grid
- List
- ListItem
- RedButton
- SmallParagraphRight
- TextInput
- Title

O intuito de utilizar os styled-components também se deu ao benefício de DRY (_Don't repeat yourself_), visto que podemos reaproveitar estilos similares, como no caso do RedButton e Button ou dos FlexContainer's.
