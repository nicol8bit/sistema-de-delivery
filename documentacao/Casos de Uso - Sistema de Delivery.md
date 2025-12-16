# **Casos de Uso \- Sistema de Delivery**

## **UC01 – Realizar Pedido**

**Ator:** Cliente

**Objetivo:** Permitir que o Cliente selecione produtos, defina o endereço e forma de pagamento para finalizar uma compra.

### **Pré-condições**

1. O Cliente deve estar autenticado no sistema.  
2. O Cliente deve ter pelo menos um endereço de entrega cadastrado.  
3. O carrinho de compras deve conter itens de um único Restaurante.  
4. O Restaurante deve estar com o status "Aberto" no momento da finalização.  
   

### **Fluxo Principal**

1. O Cliente acessa o aplicativo e navega pelas opções de Restaurantes.  
2. O Cliente seleciona um Restaurante e adiciona os itens desejados ao carrinho.  
3. O Cliente acessa o carrinho e clica em "Finalizar Pedido".  
4. O Sistema exibe a tela de checkout, solicitando a confirmação do endereço de entrega e a seleção da forma de pagamento.  
5. O Cliente seleciona a forma de pagamento (ex: Cartão de Crédito, Pix, Pagamento na Entrega).  
6. O Cliente confirma a transação (se pagamento online) e clica em "Confirmar Pedido".  
7. O Sistema processa o pagamento.  
8. O Sistema registra o pedido no banco de dados.  
9. O Sistema envia a notificação do novo pedido para o Restaurante.  
10. O Sistema exibe a tela de acompanhamento do pedido para o Cliente.

### **Fluxos Alternativos**

A1 \- Cliente sem endereço cadastrado: O Sistema redireciona o Cliente para o cadastro de um novo endereço antes de prosseguir.

A2 \- Item indisponível: O Sistema notifica o Cliente que o item foi removido do cardápio ou está temporariamente indisponível, permitindo que ele continue ou remova o item.

### **Exceções**

-  Falha no Processamento do Pagamento: O Sistema notifica o Cliente sobre a falha e solicita que ele tente novamente ou selecione outra forma de pagamento. O pedido não é registrado.

### **Pós-condições**

1. Um novo pedido é criado no sistema com o status "Recebido".  
2. O Cliente recebe uma confirmação e o Restaurante é notificado.

### **Regras de Negócio**

1. O valor mínimo do pedido é definido pelo Restaurante.  
2. A taxa de entrega é calculada com base na distância entre o Cliente e o Restaurante.

## **UC02 – Atualizar Status de Entrega**

**Ator:** Entregador

**Objetivo:** Permitir que o Entregador informe o progresso da entrega, mantendo o Cliente e o Restaurante informados.

### **Pré-condições**

1. Entregador deve estar autenticado no sistema.  
2. O Entregador deve ter um pedido ativo sob sua responsabilidade (status "Aguardando Retirada" ou "A Caminho da Entrega").  
3. O GPS do dispositivo do Entregador deve estar ativo para registro de localização.  
   

### **Fluxo Principal**

1. O Entregador acessa o aplicativo e visualiza a lista de pedidos ativos.  
2. O Entregador seleciona o pedido que está sendo processado.  
3. O Entregador realiza a ação física (ex: retira o pedido no Restaurante).  
4. O Entregador clica no botão para atualizar o status no aplicativo.  
5. O Sistema exibe as opções de status disponíveis para a etapa atual (ex: "Pedido Retirado", "A Caminho da Entrega", "Entregue").  
6. O Entregador seleciona o novo status (ex: "Pedido Retirado").  
7. O Sistema registra a mudança de status, a hora da atualização e a localização atual do Entregador.  
8. O Sistema notifica o Cliente e o Restaurante sobre a atualização.  
9. Se o status for "Entregue", o Sistema finaliza o pedido e processa o pagamento da taxa de entrega para o Entregador.  
   

### **Fluxos Alternativos**

A1 \- Problema na Entrega: O Entregador seleciona a opção "Reportar Problema" e insere uma breve descrição do ocorrido. O Sistema notifica a Central de Suporte e suspende o fluxo normal do pedido.

### **Exceções**

- Falha de Conexão: O Sistema armazena a atualização localmente e tenta sincronizar assim que a conexão for restabelecida. O Entregador é notificado.

### **Pós-condições**

1. O status do pedido é atualizado no sistema.  
2. O Cliente e o Restaurante são notificados sobre a mudança de status.  
3. Se o status for "Entregue", o pedido é finalizado.

### **Regras de Negócio**

1. Apenas o Entregador pode atualizar o status de "A Caminho da Entrega" para "Entregue".  
2. O registro de localização é obrigatório para as transições de status "Pedido Retirado" e "Entregue".  
3. O Entregador só pode aceitar um novo pedido após finalizar o anterior.

