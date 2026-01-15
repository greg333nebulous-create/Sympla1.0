/**
 * ====================================================================
 * ARQUIVO DE CONFIGURAÇÃO DO EVENTO
 * ====================================================================
 * 
 * Este arquivo centraliza todas as informações do seu evento.
 * Edite as informações abaixo para personalizar seu evento.
 * Todas as alterações feitas aqui serão refletidas automaticamente
 * em todo o site.
 */

export const EVENT_CONFIG = {
  // ============================================
  // INFORMAÇÕES BÁSICAS DO EVENTO
  // ============================================
  
  /**
   * TÍTULO DO EVENTO
   * Nome principal que aparecerá em todo o site
   */
  titulo: "Folk Valley Apresenta: Matheus & Kauan e Murilo Huff",

  /**
   * DESCRIÇÃO DO EVENTO
   * Texto que descreve o evento (pode usar HTML simples)
   */
  descricao: "Uma noite inesquecível com os maiores sucessos do sertanejo!",

  // ============================================
  // IMAGENS DO EVENTO
  // ============================================
  
  /**
   * FOTO DE CAPA PRINCIPAL
   * Imagem principal do evento (formato: JPG, PNG ou WEBP)
   * Tamanho recomendado: 1200x630px
   */
  fotoCapa: "https://images.sympla.com.br/694995199333d-xs.jpg",

  /**
   * BANNER SECUNDÁRIO (Opcional)
   * Imagem alternativa para outras seções
   */
  bannerSecundario: "https://images.sympla.com.br/694995199333d-xs.jpg",

  // ============================================
  // DATA E HORÁRIO DO EVENTO
  // ============================================
  
  /**
   * DATA DE INÍCIO
   * Formato: DD/MM/AAAA
   */
  dataInicio: "31/01/2026",

  /**
   * HORÁRIO DE INÍCIO
   * Formato: HH:MM
   */
  horarioInicio: "17:00",

  /**
   * DATA DE TÉRMINO
   * Formato: DD/MM/AAAA
   */
  dataTermino: "01/02/2026",

  /**
   * HORÁRIO DE TÉRMINO
   * Formato: HH:MM
   */
  horarioTermino: "02:00",

  /**
   * TEXTO FORMATADO COMPLETO DA DATA
   * Este é o texto que aparece no evento
   * Você pode personalizar como preferir
   */
  dataFormatada: "31 jan - 2026 • 17:00 > 1 fev - 2026 • 02:00",

  // ============================================
  // LOCAL DO EVENTO
  // ============================================
  
  /**
   * NOME DO LOCAL
   */
  nomeLocal: "Folk Valley",

  /**
   * CIDADE
   */
  cidade: "Valinhos",

  /**
   * ESTADO (sigla)
   */
  estado: "SP",

  /**
   * ENDEREÇO COMPLETO
   */
  enderecoCompleto: "Folk Valley, Valinhos - SP",

  /**
   * LINK DO GOOGLE MAPS (Opcional)
   * Cole aqui o link do Google Maps para o local
   */
  linkMaps: "https://maps.google.com/?q=Folk+Valley+Valinhos+SP",

  // ============================================
  // PRODUTOR/ORGANIZADOR
  // ============================================
  
  /**
   * NOME DO PRODUTOR/ORGANIZADOR
   */
  nomeProdutor: "Folk Valley",

  /**
   * LOGOMARCA DO PRODUTOR
   * Imagem do logo (formato: PNG com fundo transparente recomendado)
   * Tamanho recomendado: 200x200px
   */
  logoProdutor: "https://images.sympla.com.br/6912230395a10.png",

  /**
   * EMAIL DE CONTATO DO PRODUTOR
   */
  emailProdutor: "contato@folkvalley.com.br",

  /**
   * TELEFONE DO PRODUTOR (Opcional)
   */
  telefoneProdutor: "(19) 99999-9999",

  /**
   * DESCRIÇÃO DO PRODUTOR
   */
  descricaoProdutor: "O Folk Valley é um espaço de eventos que une tradição, música e entretenimento em um ambiente único.",

  // ============================================
  // INGRESSOS E VALORES
  // ============================================
  
  /**
   * LISTA DE INGRESSOS DISPONÍVEIS
   * 
   * Para cada ingresso, configure:
   * - id: identificador único (não altere após criar)
   * - name: nome do ingresso que aparece para o público
   * - price: valor do ingresso (em reais)
   * - fee: taxa de serviço (em reais)
   * - installments: número de parcelas padrão
   * - maxInstallments: número máximo de parcelas
   * - availableUntil: data limite de venda (formato: DD/MM/AAAA)
   * - status: 'available' ou 'sold-out'
   * - hasInfo: true se tiver informações adicionais
   * 
   * ATENÇÃO: Você pode adicionar ou remover ingressos desta lista
   */
  ingressos: [
    {
      id: 'pista-premium-social',
      name: 'Pista Premium Social - 2º Lote',
      price: 70.00,
      fee: 7.00,
      installments: 6,
      maxInstallments: 12,
      availableUntil: '31/01/2026',
      status: 'available' as const,
      hasInfo: true
    },
    {
      id: 'pista-premium-inteira',
      name: 'Pista Premium Inteira - 2º Lote',
      price: 120.00,
      fee: 12.00,
      installments: 6,
      maxInstallments: 12,
      availableUntil: '31/01/2026',
      status: 'available' as const
    },
    {
      id: 'area-vip-meia',
      name: 'Área Vip Meia-Entrada - 2º Lote',
      price: 125.00,
      fee: 12.50,
      installments: 6,
      maxInstallments: 12,
      availableUntil: '31/01/2026',
      status: 'available' as const
    },
    {
      id: 'area-vip-social',
      name: 'Área Vip Social - 2º Lote',
      price: 135.00,
      fee: 13.50,
      installments: 6,
      maxInstallments: 12,
      availableUntil: '31/01/2026',
      status: 'available' as const
    },
    {
      id: 'area-vip-inteira',
      name: 'Área Vip Inteira - 2º Lote',
      price: 250.00,
      fee: 25.00,
      installments: 6,
      maxInstallments: 12,
      availableUntil: '31/01/2026',
      status: 'available' as const
    },
    {
      id: 'open-valley-meia',
      name: 'Open Valley Meia-Entrada - 2º Lote',
      price: 250.00,
      fee: 25.00,
      installments: 6,
      maxInstallments: 12,
      availableUntil: '31/01/2026',
      status: 'available' as const
    },
    {
      id: 'open-valley-social',
      name: 'Open Valley Social - 2º Lote',
      price: 260.00,
      fee: 26.00,
      installments: 6,
      maxInstallments: 12,
      availableUntil: '31/01/2026',
      status: 'available' as const
    },
    {
      id: 'open-valley-inteira',
      name: 'Open Valley Inteira - 2º Lote',
      price: 305.00,
      fee: 30.50,
      installments: 6,
      maxInstallments: 12,
      availableUntil: '31/01/2026',
      status: 'available' as const
    }
  ],

  /**
   * VALOR DO SEGURO (Opcional)
   * Preço do seguro de cancelamento
   */
  precoSeguro: 11.65,

  // ============================================
  // CONFIGURAÇÕES ADICIONAIS
  // ============================================
  
  /**
   * OFERTA PIX
   * Mostrar badge de oferta à vista no Pix
   */
  mostrarOfertaPix: true,

  /**
   * PERMITIR PARCELAMENTO
   */
  permitirParcelamento: true,

  /**
   * MENSAGEM PERSONALIZADA (Opcional)
   * Aparece no topo da página de checkout
   */
  mensagemPersonalizada: "",

  /**
   * COR TEMA PRINCIPAL (Opcional)
   * Cor em hexadecimal para personalizar elementos
   */
  corTema: "#0096ff",
};

/**
 * ====================================================================
 * INSTRUÇÕES DE USO
 * ====================================================================
 * 
 * 1. COMO ALTERAR O TÍTULO DO EVENTO:
 *    - Edite o campo "titulo" acima
 * 
 * 2. COMO ALTERAR AS FOTOS:
 *    - Faça upload da sua imagem em um serviço de hospedagem
 *    - Cole a URL completa nos campos "fotoCapa" ou "logoProdutor"
 * 
 * 3. COMO ALTERAR DATA E HORA:
 *    - Edite os campos de data (formato: DD/MM/AAAA)
 *    - Edite os campos de horário (formato: HH:MM)
 * 
 * 4. COMO ALTERAR INGRESSOS:
 *    - Para mudar preços: altere os valores "price" e "fee"
 *    - Para adicionar novo ingresso: copie um bloco existente e cole abaixo
 *    - Para remover ingresso: delete o bloco completo do ingresso
 *    - Para marcar como esgotado: mude "status" para 'sold-out'
 * 
 * 5. COMO ALTERAR O LOCAL:
 *    - Edite os campos "nomeLocal", "cidade", "estado"
 * 
 * 6. COMO ALTERAR O PRODUTOR:
 *    - Edite "nomeProdutor" e "logoProdutor"
 * 
 * ====================================================================
 * DICA: Salve este arquivo após cada alteração e recarregue a página
 * para ver as mudanças aplicadas!
 * ====================================================================
 */

export default EVENT_CONFIG;
