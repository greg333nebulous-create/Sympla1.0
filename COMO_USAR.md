# 📋 Como Usar o Arquivo de Configuração do Evento

## 🎯 Arquivo Principal: `eventConfig.ts`

Este projeto possui um **arquivo centralizado de configuração** onde você pode modificar todas as informações do seu evento sem precisar editar o código diretamente.

---

## 📝 Instruções Passo a Passo

### 1️⃣ Abra o Arquivo de Configuração

Localize e abra o arquivo: **`eventConfig.ts`**

Este arquivo contém todas as informações editáveis do seu evento.

---

### 2️⃣ Edite as Informações do Evento

#### 📌 **Título do Evento**
```typescript
titulo: "Nome do Seu Evento Aqui",
```

#### 📷 **Fotos**
```typescript
fotoCapa: "URL_DA_SUA_IMAGEM_AQUI",
logoProdutor: "URL_DO_LOGO_AQUI",
```

💡 **Dica**: Use serviços como Imgur, Google Drive (público) ou qualquer hospedagem de imagens para obter a URL.

---

#### 📅 **Data e Horário**
```typescript
dataInicio: "31/01/2026",
horarioInicio: "17:00",
dataTermino: "01/02/2026",
horarioTermino: "02:00",
dataFormatada: "31 jan - 2026 • 17:00 > 1 fev - 2026 • 02:00",
```

---

#### 📍 **Local do Evento**
```typescript
nomeLocal: "Nome do Local",
cidade: "Sua Cidade",
estado: "SP",
enderecoCompleto: "Nome do Local, Cidade - Estado",
```

---

#### 🎫 **Ingressos e Valores**

Para **alterar preços** existentes:
```typescript
{
  id: 'pista-premium-social',
  name: 'Pista Premium Social - 2º Lote',
  price: 70.00,        // ← Altere o valor aqui
  fee: 7.00,           // ← Taxa de serviço
  installments: 6,
  maxInstallments: 12,
  availableUntil: '31/01/2026',
  status: 'available' as const
}
```

Para **adicionar um novo ingresso**, copie um bloco existente e cole abaixo:
```typescript
{
  id: 'novo-ingresso',                    // ID único
  name: 'Nome do Novo Ingresso',
  price: 150.00,
  fee: 15.00,
  installments: 6,
  maxInstallments: 12,
  availableUntil: '31/01/2026',
  status: 'available' as const
}
```

Para **remover um ingresso**, delete o bloco completo.

Para **marcar como ESGOTADO**:
```typescript
status: 'sold-out' as const
```

---

#### 🏢 **Produtor/Organizador**
```typescript
nomeProdutor: "Nome do Produtor",
logoProdutor: "URL_DO_LOGO",
emailProdutor: "contato@produtor.com.br",
telefoneProdutor: "(00) 00000-0000",
```

---

### 3️⃣ Salve o Arquivo

Após fazer as alterações, salve o arquivo `eventConfig.ts`.

---

### 4️⃣ Visualize as Mudanças

1. Se o projeto estiver rodando, recarregue a página no navegador
2. Se não estiver rodando, execute:
   ```bash
   npm run dev
   ```

---

## ✅ Exemplos de Alterações Comuns

### Exemplo 1: Mudar o Nome do Evento
```typescript
titulo: "Festival de Música 2026",
```

### Exemplo 2: Alterar a Foto de Capa
```typescript
fotoCapa: "https://i.imgur.com/suafoto.jpg",
```

### Exemplo 3: Adicionar Novo Ingresso
```typescript
{
  id: 'camarote',
  name: 'Camarote VIP',
  price: 500.00,
  fee: 50.00,
  installments: 12,
  maxInstallments: 12,
  availableUntil: '31/01/2026',
  status: 'available' as const
}
```

---

## 🔄 Alterações Automáticas

Quando você muda uma informação no `eventConfig.ts`, ela é atualizada **automaticamente** em:

✅ Página principal do evento  
✅ Tela de checkout  
✅ Página de pagamento PIX  
✅ Resumo do pedido  
✅ Todos os lugares onde a informação aparece

---

## 🚨 Importante

- **Não altere os campos marcados com `id`** nos ingressos após criá-los
- Mantenha sempre as **aspas** nos textos
- Use **vírgulas** para separar os valores
- Teste sempre após fazer alterações

---

## 💡 Dica Final

Se você não sabe onde hospedar suas imagens:

1. **Imgur** - https://imgur.com/ (gratuito e fácil)
2. **ImgBB** - https://imgbb.com/ (gratuito)
3. **Cloudinary** - https://cloudinary.com/ (plano gratuito disponível)

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas, consulte os comentários dentro do próprio arquivo `eventConfig.ts` - ele contém instruções detalhadas para cada campo!

---

**Bom trabalho! 🎉**
