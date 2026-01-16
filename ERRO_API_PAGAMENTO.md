# 🔴 Erro HTTP 500 - API de Pagamentos

## O que está acontecendo?

O erro **HTTP 500 (Internal Server Error)** ocorre quando você clica em "Finalizar compra". Isso significa que o **servidor da API de pagamentos** está retornando um erro.

### Mensagem do erro:
```
Erro HTTP 500: {"statusCode":500,"message":"Internal server error"}
```

---

## 🔍 Causas possíveis:

### 1. **API temporariamente indisponível**
   - O servidor pode estar fora do ar
   - Pode haver problemas de manutenção
   - Sobrecarga no servidor

### 2. **URL da API incorreta ou desatualizada**
   ```
   https://www.pagamentos-seguros.app/api-pix/ATRBIzKGfV6uRlgHZwoDxxieG9BPs4ZP3e5MNyHuAjtTAW1Byhy441uxp4sb0XwAENLUw6o4ksVIc5mlmX2e9A
   ```
   - Verifique se esta URL está ativa
   - Confirme se o token/chave na URL é válido

### 3. **Configuração do servidor**
   - A API pode estar esperando dados em formato diferente
   - Pode haver problemas de autenticação
   - CORS (Cross-Origin Resource Sharing) pode estar bloqueando

### 4. **Validação de dados**
   - CPF pode não estar sendo aceito pela API
   - Formato de telefone pode estar incorreto
   - Valor mínimo/máximo pode não estar sendo respeitado

---

## ✅ Soluções implementadas no código:

### 1. **Melhor tratamento de erros**
   - Agora mostra mensagens claras quando ocorre erro HTTP 500
   - Logs detalhados no console para debug
   - Verificação do status HTTP antes de processar resposta

### 2. **Configuração centralizada**
   - URL da API agora está no arquivo `eventConfig.ts`
   - Mais fácil de alterar e manter
   - Token do Meta Pixel também centralizado

### 3. **Mensagens de erro específicas**
   ```javascript
   if (response.status === 500) {
       alert('⚠️ Erro no servidor de pagamentos...');
   }
   ```

---

## 🛠️ Como testar e corrigir:

### Opção 1: Testar a API manualmente

Abra o PowerShell e execute:

```powershell
$body = @{
    amount = 14850
    description = "Teste de ingresso"
    customer = @{
        name = "João Silva"
        document = "12345678909"
        email = "teste@email.com"
        phone = "11999999999"
    }
    paymentMethod = "PIX"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://www.pagamentos-seguros.app/api-pix/ATRBIzKGfV6uRlgHZwoDxxieG9BPs4ZP3e5MNyHuAjtTAW1Byhy441uxp4sb0XwAENLUw6o4ksVIc5mlmX2e9A" -Method POST -Body $body -ContentType "application/json"
```

Se retornar erro 500, **o problema está na API**, não no seu código.

### Opção 2: Verificar logs do servidor

Se você tem acesso ao servidor da API:
1. Verifique os logs de erro no backend
2. Procure por stack traces ou mensagens de erro
3. Veja se há problemas de conexão com banco de dados

### Opção 3: Usar API alternativa (temporário)

Se precisar testar o fluxo, pode criar uma API mock:

```javascript
// No eventConfig.ts, altere a URL para:
apiPagamentoUrl: "https://seu-servidor-teste.com/api-pix"
```

### Opção 4: Entrar em contato com suporte

Entre em contato com o provedor da API de pagamentos:
- Informe o erro HTTP 500
- Envie os logs do console
- Peça para verificarem o endpoint

---

## 📝 Onde alterar a URL da API:

Abra o arquivo: `eventConfig.ts`

Procure por:
```typescript
apiPagamentoUrl: "https://www.pagamentos-seguros.app/api-pix/..."
```

Altere para a URL correta fornecida pelo provedor.

---

## 🔍 Como debugar:

1. **Abra o DevTools** (F12)
2. Vá na aba **Console**
3. Clique em "Finalizar compra"
4. Veja os logs:
   - `=== INICIANDO REQUISIÇÃO ===`
   - `URL da API: ...`
   - `Dados enviados: ...`
   - `Status da resposta: 500`
   - `Erro HTTP: ...`

5. **Aba Network**:
   - Procure pela requisição `api-pix`
   - Clique nela
   - Veja a **Response** (corpo da resposta)
   - Veja os **Headers** (cabeçalhos)

---

## 📞 Próximos passos:

1. ✅ Verificar se a API está online
2. ✅ Confirmar se a URL está correta
3. ✅ Testar manualmente a API com PowerShell
4. ✅ Entrar em contato com o suporte da API
5. ✅ Verificar se há documentação atualizada da API

---

## 💡 Dica para produção:

Considere implementar:
- **Retry automático** (tentar novamente após falha)
- **Fallback** para outro método de pagamento
- **Monitoramento** de uptime da API
- **Cache** de transações pendentes
- **Webhook** para receber status de pagamento

---

**Última atualização:** 16/01/2026
