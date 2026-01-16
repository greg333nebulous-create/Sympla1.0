# 🧪 Como testar o Meta Pixel

## ✅ Verificar se o Pixel está instalado

### 1. **Instale a extensão Meta Pixel Helper**
   - Chrome: https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc
   - Firefox: https://addons.mozilla.org/pt-BR/firefox/addon/facebook-pixel-helper/

### 2. **Abra seu site**
   - Abra o projeto em desenvolvimento ou produção
   - Clique no ícone da extensão Meta Pixel Helper
   - Deve mostrar: **✓ Pixel encontrado** com ID `1999929717607801`

---

## 🎯 Testar os eventos de tracking

### **Evento 1: PageView** (Automático ao carregar a página)

1. Abra o site
2. Abra o DevTools (F12)
3. Vá na aba **Console**
4. Digite:
   ```javascript
   console.log('Pixel instalado:', typeof fbq !== 'undefined')
   ```
   - Deve retornar: `Pixel instalado: true`

5. O Meta Pixel Helper deve mostrar: **PageView ✓**

---

### **Evento 2: InitiateCheckout** (Ao preencher dados e avançar)

1. Selecione ingressos
2. Preencha todos os dados pessoais:
   - Nome completo
   - Email
   - CPF válido
   - Telefone com DDD
3. Clique em **"Continuar"**
4. Abra o Console (F12) e procure:
   ```
   InitiateCheckout com dados:
   - content_category: "Evento"
   - content_name: "Folk Valley..."
   - value: [valor total]
   - currency: "BRL"
   ```

5. O Meta Pixel Helper deve mostrar: **InitiateCheckout ✓**

---

### **Evento 3: AddPaymentInfo** (Ao escolher seguro e avançar para pagamento)

1. Na etapa de proteção/seguro:
   - Escolha "Com proteção" ou "Sem proteção"
   - Clique em **"Avançar"**
2. No Console deve aparecer:
   ```
   AddPaymentInfo com dados:
   - content_category: "Evento"
   - content_name: "Folk Valley..."
   - value: [valor total com/sem seguro]
   - currency: "BRL"
   ```

3. O Meta Pixel Helper deve mostrar: **AddPaymentInfo ✓**

---

### **Evento 4: Purchase** 🎯 (AO COPIAR O CÓDIGO PIX)

**⚠️ IMPORTANTE: Só dispara quando o usuário CLICA no botão "Copiar código"**

1. Clique no botão **"Finalizar compra"**
2. Aguarde a geração do código PIX
3. **CLIQUE** no botão **"Copiar código"**
4. No Console deve aparecer:
   ```
   Purchase com dados:
   - content_name: "Folk Valley..."
   - content_type: "product"
   - currency: "BRL"
   - value: [valor total]
   ```

5. O Meta Pixel Helper deve mostrar: **Purchase ✓**

---

## 🔍 Verificar eventos no Facebook Events Manager

### Como acessar:

1. Acesse: https://business.facebook.com/events_manager
2. Selecione seu Pixel ID: `1999929717607801`
3. Vá em **"Test Events"** (Eventos de Teste)
4. Deixe a página aberta
5. Faça o fluxo completo no seu site
6. Os eventos devem aparecer em tempo real

### O que você deve ver:

```
✅ PageView          - Ao carregar a página
✅ InitiateCheckout  - Ao preencher dados e continuar
✅ AddPaymentInfo    - Ao escolher proteção e avançar
✅ Purchase          - AO COPIAR o código PIX
```

---

## 🐛 Debug de problemas

### Se o evento Purchase NÃO disparar:

1. **Abra o Console (F12)**
2. **Digite:**
   ```javascript
   // Verificar se fbq existe
   console.log('fbq existe?', typeof fbq !== 'undefined')
   
   // Testar manualmente
   if (typeof fbq !== 'undefined') {
     fbq('track', 'Purchase', {
       content_name: 'Teste Manual',
       content_type: 'product',
       currency: 'BRL',
       value: 100.00
     });
     console.log('Evento Purchase disparado manualmente!');
   }
   ```

3. **Verifique:**
   - Se o Meta Pixel Helper capturou o evento
   - Se apareceu no Events Manager

### Se aparecer erro "fbq is not defined":

O pixel não está carregado. Verifique:
1. Se o script está no `<head>` do HTML
2. Se não há bloqueadores de anúncios ativos
3. Se a internet está funcionando

### Se o evento disparar mas não aparecer no Events Manager:

1. Aguarde até 20 minutos (pode haver delay)
2. Verifique se está na aba correta (Test Events)
3. Confirme se o Pixel ID está correto

---

## 📊 Monitorar conversões em produção

Após publicar o site:

1. Acesse o **Events Manager**
2. Vá em **"Overview"** (Visão Geral)
3. Selecione o período desejado
4. Você verá gráficos com:
   - Quantas pessoas visitaram (PageView)
   - Quantas iniciaram checkout (InitiateCheckout)
   - Quantas adicionaram pagamento (AddPaymentInfo)
   - **Quantas compraram** (Purchase) 🎯

---

## 💡 Dicas importantes

### ✅ **Boas práticas:**

- O evento Purchase só deve disparar quando há conversão real
- Não dispara ao gerar o PIX, mas ao **copiar o código**
- Isso garante que o cliente teve intenção de pagar

### ⚠️ **Atenção:**

- Desative bloqueadores de anúncios ao testar
- Use modo anônimo para testar sem cache
- Limpe cookies entre testes
- Use o pixel em modo "Test Events" antes de ir ao ar

### 🎯 **Para campanhas de anúncios:**

Com esses eventos configurados, você pode:
- Criar públicos personalizados
- Fazer remarketing para quem abandonou carrinho
- Otimizar anúncios para conversão (Purchase)
- Rastrear ROI (Retorno sobre Investimento)

---

## ✨ Checklist final

Antes de publicar, confirme:

- [ ] Meta Pixel Helper mostra pixel ativo
- [ ] PageView dispara ao carregar página
- [ ] InitiateCheckout dispara ao preencher dados
- [ ] AddPaymentInfo dispara ao avançar para pagamento
- [ ] **Purchase dispara ao copiar código PIX** ✅
- [ ] Eventos aparecem no Events Manager
- [ ] Valores estão corretos (preço em BRL)

---

**Tudo funcionando? 🎉 Seu pixel está configurado corretamente!**
