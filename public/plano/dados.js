/* Conteúdo do "Meu Plano": cada tarefa ensina onde ir, o passo a passo, custo e prazo.
   Valores conferidos em novembro de 2026. Taxas mudam: o plano sempre manda confirmar no site oficial. */
window.PA_DADOS = (function () {
  const L = {
    pf: "https://www.gov.br/pf/pt-br/assuntos/passaporte",
    antecedentes: "https://www.gov.br/pt-br/servicos/emitir-certidao-de-antecedentes-criminais",
    registro: "https://registrocivil.org.br",
    consular: "https://www.gov.br/mre/pt-br/assuntos/portal-consular",
    receita: "https://www.gov.br/receitafederal/pt-br"
  };

  // ---------------- tarefas gerais (valem para todos os países) ----------------
  const GERAL = {
    comece: { t: "Ler o capítulo \"Comece aqui\" do guia", d: "Confirme a sua porta de entrada no fluxograma.", ch: "Comece aqui",
      onde: ["No próprio guia, logo depois do sumário"], passos: [
        "Abra o PDF do Passaporte Aberto no celular.",
        "Responda as 4 perguntas do fluxograma \"Comece aqui\".",
        "Anote a porta de entrada que apareceu: cidadania, trabalho, renda, estudo ou Mercosul.",
        "Leia o \"Resumo em 30 segundos\" do país escolhido."],
      custo: "Grátis", prazo: "10 minutos" },
    passaporte: { t: "Tirar ou renovar o passaporte", d: "Se vence em menos de 1 ano, renove antes de tudo.", ch: "Passo 2",
      onde: ["Polícia Federal (pedido online e atendimento num posto da PF)", L.pf], passos: [
        "Preencha o formulário de passaporte no site da Polícia Federal.",
        "Pague a GRU (boleto da taxa) no banco, app ou lotérica.",
        "Depois do pagamento, agende o atendimento no posto da PF mais perto.",
        "Vá ao posto com RG, CPF, título de eleitor e o comprovante de quitação eleitoral. Homens de 19 a 45 anos levam também o documento militar.",
        "Volte ao mesmo posto para retirar em até 90 dias."],
      custo: "R$ 257,25 (passaporte comum; pode ser reajustado)", prazo: "6 a 10 dias úteis depois do atendimento",
      dica: "Muitos vistos exigem passaporte com validade maior que a estadia. Se o seu vence em menos de 1 ano, renove já." },
    antecedentes: { t: "Tirar a certidão de antecedentes criminais", d: "É grátis e sai pela internet.", ch: "Passo 2",
      onde: ["Polícia Federal, pelo gov.br", L.antecedentes], passos: [
        "Entre na página \"Emitir certidão de antecedentes criminais\" do gov.br.",
        "Informe nome completo, CPF, data de nascimento e nome da mãe.",
        "Baixe o PDF na hora.",
        "Se o sistema pedir confirmação presencial (acontece com nomes muito comuns), agende na PF."],
      custo: "Grátis", prazo: "Na hora. Vale 90 dias",
      dica: "Como vale só 90 dias, tire perto da data do pedido do visto. Ela também precisa de apostila." },
    meta: { t: "Definir a data e a meta de dinheiro", d: "Preencha os campos acima e veja quanto guardar por mês.", ch: "Passo 4",
      onde: ["Aqui no Meu Plano e no Passo 4 do guia"], passos: [
        "Some os custos de saída: passaporte, documentos, apostilas, traduções, visto e passagem.",
        "Some 6 meses de custo de vida no país (aluguel, mercado, transporte).",
        "Coloque o total no campo \"Meta total\" e o que você já tem guardado.",
        "Escolha o mês da mudança: o plano mostra quanto separar por mês."],
      custo: "Grátis", prazo: "20 minutos" },
    certidoes: { t: "Pedir certidões de inteiro teor", d: "Nascimento e, se for o caso, casamento.", ch: "Passo 2",
      onde: ["Cartório onde você foi registrado, ou online no portal do Registro Civil", L.registro], passos: [
        "No portal do Registro Civil, escolha \"Certidão de nascimento\" e o tipo \"inteiro teor\".",
        "Informe estado, cidade e cartório onde você foi registrado.",
        "Escolha a versão digital (chega por e-mail) se o país aceitar; para apostilar, a digital do cartório serve.",
        "Pague com cartão ou boleto e acompanhe o pedido."],
      custo: "Tabelado pelo seu estado (o valor aparece antes de pagar)", prazo: "Cerca de 5 dias úteis, mais o envio se for impressa",
      dica: "Inteiro teor é a cópia completa do livro do cartório. A certidão simples, aquela comum, não serve para imigração." },
    apostila: { t: "Apostilar os documentos", d: "Apostila de Haia, documento por documento.", ch: "Passo 2",
      onde: ["Cartório de Notas habilitado para apostila (a lista está no site do CNJ)"], passos: [
        "Separe os documentos: certidões, antecedentes, diploma e o que o seu visto pedir.",
        "Procure um cartório habilitado para apostilamento (muitos fazem online).",
        "Envie ou leve os documentos. O cartório confere e informa o valor.",
        "Pague por documento e receba a apostila, que tem QR Code de verificação."],
      custo: "Tabelado pelo estado, por documento (ex.: cerca de R$ 140 em SP e R$ 80 no RJ)", prazo: "Até 5 dias úteis",
      dica: "Apostila vale para os 13 países do guia, todos fazem parte da Convenção da Haia." },
    traducao: { t: "Fazer a tradução juramentada", d: "Depois da apostila, nunca antes.", ch: "Passo 2",
      onde: ["Tradutor público juramentado: a lista oficial fica no site da Junta Comercial do seu estado (busque \"tradutores públicos\")"], passos: [
        "Pergunte ao consulado se aceita tradução feita no Brasil ou se exige tradutor do país de destino.",
        "Escolha um tradutor da lista oficial da Junta Comercial, no idioma certo.",
        "Envie os documentos já apostilados, para a apostila ser traduzida junto.",
        "Confira o carimbo, o número do livro e a assinatura do tradutor."],
      custo: "Por lauda, tabela da Junta do estado (em geral de R$ 80 a R$ 185)", prazo: "3 a 10 dias úteis",
      dica: "Traduzir antes de apostilar é o erro que mais faz a pessoa pagar duas vezes." },
    reserva: { t: "Separar a reserva de 6 meses de custo de vida", d: "É a regra mais segura do guia.", ch: "Passo 4",
      onde: ["Sua conta, de preferência numa conta internacional"], passos: [
        "Use a calculadora do plano para ver se a meta foi atingida.",
        "Abra uma conta ou cartão internacional para levar o dinheiro com câmbio melhor.",
        "Guarde os extratos: vários vistos pedem prova de fundos."],
      custo: "Depende do país (veja o Passo 4)", prazo: "Ao longo dos meses" },
    moradia: { t: "Reservar moradia temporária para o 1º mês", d: "Assim você procura aluguel já no país, com calma.", ch: "Passo 5",
      onde: ["Sites de hospedagem e residências para estudantes ou recém-chegados"], passos: [
        "Reserve 2 a 4 semanas num lugar com contrato ou comprovante em seu nome.",
        "Guarde o comprovante: alguns vistos pedem endereço no país.",
        "Nunca pague aluguel de longo prazo sem ver o imóvel e o contrato."],
      custo: "Depende da cidade", prazo: "1 dia" },
    mala: { t: "Originais e cópias na mala de mão", d: "Nunca despache documentos.", ch: "Checklists",
      onde: ["Sua bagagem de mão"], passos: [
        "Separe uma pasta com originais, apostilas e traduções.",
        "Leve cópias impressas e uma cópia digital no celular e na nuvem.",
        "Inclua comprovantes de renda, moradia e seguro."],
      custo: "Grátis", prazo: "1 hora" },
    saida: { t: "Ver a saída definitiva na Receita Federal", d: "Se for morar fora de vez, comunique a saída.", ch: "Checklists",
      onde: ["Receita Federal (busque \"saída definitiva do país\" no gov.br)", L.receita], passos: [
        "Leia as regras de saída definitiva no site da Receita.",
        "Se for o seu caso, faça a comunicação de saída definitiva no prazo.",
        "No ano seguinte, entregue a declaração de saída definitiva.",
        "Na dúvida, fale com um contador: isso evita pagar imposto nos dois países."],
      custo: "Grátis (contador é opcional)", prazo: "Algumas horas" },
    registro: { t: "Fazer o documento de residência local", d: "A primeira coisa da primeira semana.", ch: "Passo 5",
      onde: ["O órgão de imigração do país (está no capítulo do seu destino)"], passos: [
        "Leve passaporte, visto ou comprovante do pedido e o endereço onde está morando.",
        "Agende assim que chegar: em vários países o prazo é curto.",
        "Guarde o protocolo: ele prova que você está regular enquanto o documento sai."],
      custo: "Taxa local (veja no capítulo do país)", prazo: "Primeira semana" },
    banco: { t: "Abrir conta em banco e tirar chip local", d: "Facilitam aluguel, salário e cadastro.", ch: "Passo 5",
      onde: ["Bancos e operadoras do país"], passos: [
        "Compre um chip de celular local no aeroporto ou numa loja da operadora.",
        "Abra conta num banco com o documento de residência ou o protocolo.",
        "Atualize seu endereço e telefone em todos os cadastros."],
      custo: "Baixo", prazo: "Primeiras 2 semanas" },
    consulado: { t: "Registrar-se no consulado brasileiro", d: "Ajuda com documentos e com o voto lá de fora.", ch: "Passo 5",
      onde: ["Consulado do Brasil na sua cidade, pelo Portal Consular", L.consular], passos: [
        "Procure o consulado brasileiro responsável pela sua cidade.",
        "Faça a matrícula consular, se o consulado oferecer.",
        "Transfira seu título de eleitor para o exterior quando for possível."],
      custo: "Grátis", prazo: "Primeiro mês" }
  };

  // ---------------- tarefas do caminho de cada país ----------------
  const P = {
    portugal: { nome: "Portugal", flag: "pt", foto: "portugal", cap: "Capítulo Portugal", site: "https://vistos.mne.gov.pt", trad: false,
      extras: [["Contrato ou comprovantes de renda", "Empregador, banco e Receita (declaração de IR)", true, false]],
      tarefas: [
        ["Escolher o visto: D1, D7 ou D8", "Pelo que você consegue comprovar hoje.", ["Portal de Vistos do governo português", "https://vistos.mne.gov.pt"], [
          "D1: você tem contrato ou promessa de contrato de trabalho em Portugal.",
          "D7: você tem renda passiva regular (aposentadoria, aluguel, investimentos).",
          "D8: você trabalha remoto para empresa ou clientes fora de Portugal.",
          "Confira no portal a renda mínima exigida para o visto escolhido."], "Grátis para consultar", "1 dia",
          "Desde a Lei 61/2025 não existe mais o visto comum de \"procura de trabalho\". Entrar como turista para resolver lá ficou muito mais difícil."],
        ["Montar a pasta do visto", "Documentos do Passo 2 mais os do visto escolhido.", ["Banco, Receita Federal e empregador"], [
          "Passaporte válido e antecedentes da PF com apostila.",
          "Extratos bancários e declaração de IR (D7 e D8) ou o contrato de trabalho (D1).",
          "Seguro de viagem e comprovante de onde vai morar em Portugal.",
          "Formulário do visto preenchido no Portal de Vistos."], "Apostilas e taxas", "2 a 4 semanas"],
        ["Dar entrada no pedido do visto", "No centro de pedidos de visto ou no consulado da sua região.", ["Centro de pedidos indicado no Portal de Vistos (atendimento presencial)", "https://vistos.mne.gov.pt"], [
          "Agende o atendimento indicado no Portal de Vistos.",
          "Leve originais e cópias de tudo.",
          "Pague a taxa consular e guarde o recibo.",
          "Acompanhe o pedido pelo número de protocolo."], "Taxa consular (valor no portal)", "Peça com pelo menos 3 meses de antecedência"],
        ["Ao chegar: NIF, NISS e AIMA", "Números de imposto e previdência, e o registro de residência.", ["Finanças (NIF), Segurança Social (NISS) e AIMA", "https://aima.gov.pt"], [
          "NIF: número fiscal, nas Finanças ou numa Loja do Cidadão.",
          "NISS: número da Segurança Social, para trabalhar com contrato.",
          "AIMA: agende a autorização de residência dentro da validade do visto.",
          "Lembre: a cidadania portuguesa agora pede 7 anos de residência."], "NIF e NISS grátis; taxa na AIMA", "Primeiras semanas"]] },
    espanha: { nome: "Espanha", flag: "es", foto: "espanha", cap: "Capítulo Espanha", site: "https://www.exteriores.gob.es", trad: true,
      extras: [["Comprovantes de renda ou matrícula", "Banco, cliente ou escola na Espanha", true, true]],
      tarefas: [
        ["Escolher entre estudo e nômade digital", "As duas portas mais usadas por quem está começando.", ["Ministério de Assuntos Exteriores da Espanha", "https://www.exteriores.gob.es"], [
          "Estudo: matrícula num curso reconhecido, com prova de fundos.",
          "Nômade digital: trabalho remoto para fora da Espanha, com renda comprovada.",
          "Veja a lista de documentos no site do consulado espanhol da sua região."], "Grátis", "1 dia",
          "Com 2 anos de residência legal, o brasileiro pode pedir a nacionalidade espanhola."],
        ["Separar a renda ou a matrícula", "Nômade digital pede cerca de € 2.849 por mês.", ["Seu banco e seus clientes ou empregador"], [
          "Junte contratos e extratos que provem a renda mensal.",
          "Para estudo, guarde a carta de matrícula e o comprovante de pagamento.",
          "Apostile e traduza o que o consulado pedir."], "Apostilas e traduções", "2 a 4 semanas"],
        ["Pedir o visto no consulado", "No consulado espanhol que atende o seu estado.", ["Consulado-Geral da Espanha da sua região", "https://www.exteriores.gob.es"], [
          "Agende pelo sistema indicado no site do consulado.",
          "Leve originais, cópias, apostilas e traduções.",
          "Pague a taxa e guarde o protocolo."], "Taxa consular (valor no site)", "Algumas semanas"],
        ["Ao chegar: NIE/TIE e empadronamiento", "Documento de estrangeiro e registro do endereço.", ["Polícia (Extranjería) e prefeitura (Ayuntamiento)"], [
          "Faça o empadronamiento (registro de endereço) na prefeitura.",
          "Agende a cita para tirar o TIE, o cartão de residente.",
          "Guarde todos os comprovantes: contam para os 2 anos da nacionalidade."], "Taxa do TIE", "Primeiro mês"]] },
    italia: { nome: "Itália", flag: "it", foto: "italia", cap: "Capítulo Itália", site: "https://www.esteri.it", trad: true,
      extras: [["Certidões da família até o italiano", "Cartórios brasileiros e o comune italiano", true, true]],
      tarefas: [
        ["Confirmar a sua linha", "Pai, mãe, avô ou avó italianos.", ["Capítulo Itália do guia"], [
          "Desenhe a árvore do italiano até você.",
          "Pela regra de 2025, bisnetos ficaram de fora.",
          "Verifique se o italiano não se naturalizou brasileiro antes do nascimento do filho."], "Grátis", "1 dia"],
        ["Pedir a certidão italiana do antepassado", "No comune onde ele nasceu.", ["Comune (prefeitura) da cidade natal do italiano"], [
          "Descubra a cidade e a data de nascimento do italiano.",
          "Escreva ao comune pedindo o \"estratto dell'atto di nascita\".",
          "Guarde a resposta: é a prova da origem."], "Geralmente grátis ou baixo", "Semanas a meses"],
        ["Certidões brasileiras de toda a linha", "Inteiro teor, apostiladas e traduzidas para o italiano.", ["Cartórios de registro civil e tradutor juramentado de italiano"], [
          "Peça certidões de nascimento, casamento e óbito de cada pessoa da linha.",
          "Corrija erros de nome ou data antes (isso trava o processo).",
          "Apostile e traduza para o italiano."], "Certidões, apostilas e traduções", "1 a 3 meses"],
        ["Dar entrada no reconhecimento", "No consulado ou na Itália.", ["Consulado da Itália da sua região ou comune italiano", "https://www.esteri.it"], [
          "Compare a fila do consulado com a opção de dar entrada na Itália.",
          "Agende pelo sistema do consulado.",
          "Acompanhe as decisões recentes da Justiça italiana, que mudaram em 2025 e 2026."], "Taxa consular", "Varia muito"]] },
    irlanda: { nome: "Irlanda", flag: "ie", foto: "irlanda", cap: "Capítulo Irlanda", site: "https://www.irishimmigration.ie", trad: true,
      extras: [["Prova de fundos e seguro saúde", "Banco e seguradora", false, false]],
      tarefas: [
        ["Escolher escola de inglês credenciada", "Só cursos da lista oficial dão permissão de trabalho.", ["Lista oficial de cursos do governo irlandês", "https://www.irishimmigration.ie"], [
          "Confira se o curso está na lista oficial de cursos elegíveis.",
          "Compare preço, cidade e carga horária.",
          "Peça a carta de aceite da escola."], "Grátis para pesquisar", "1 semana"],
        ["Separar a prova de fundos", "O valor exigido está no capítulo do guia.", ["Seu banco"], [
          "Junte o valor exigido numa conta no seu nome.",
          "Tire extratos recentes.",
          "Confira o valor atualizado no site da imigração irlandesa."], "O valor fica com você", "Ao longo dos meses"],
        ["Pagar o curso e o seguro saúde", "Guarde todos os comprovantes.", ["Escola e seguradora"], [
          "Pague o curso pela forma indicada pela escola.",
          "Contrate o seguro saúde exigido para estudantes.",
          "Leve os comprovantes na mala de mão."], "Curso e seguro", "1 semana"],
        ["Ao chegar: registro de imigração e PPS", "O PPS permite trabalhar e receber salário.", ["Imigração irlandesa e Intreo (PPS)", "https://www.irishimmigration.ie"], [
          "Agende o registro de imigração assim que chegar.",
          "Peça o número PPS.",
          "Abra conta em banco e comece a procurar trabalho de meio período."], "Taxa de registro", "Primeiro mês"]] },
    canada: { nome: "Canadá", flag: "ca", foto: "canada", cap: "Capítulo Canadá", site: "https://www.canada.ca/en/immigration-refugees-citizenship.html", trad: true,
      extras: [["Diploma, histórico e avaliação (ECA)", "Sua faculdade e a empresa de avaliação", false, true], ["Resultado da prova de idioma", "Centro de provas (IELTS, CELPIP ou TEF)", false, false]],
      tarefas: [
        ["Fazer a prova de idioma", "Inglês ou francês; o francês dá pontos extras.", ["Centros oficiais de prova no Brasil"], [
          "Escolha a prova aceita pelo governo canadense (inglês ou francês).",
          "Agende num centro de provas e estude com simulados.",
          "Guarde o resultado: ele vale por tempo limitado."], "Taxa da prova", "1 a 3 meses de preparo"],
        ["Pedir a avaliação do diploma (ECA)", "Sem ela o diploma brasileiro não pontua.", ["Empresa de avaliação autorizada pelo governo canadense", "https://www.canada.ca/en/immigration-refugees-citizenship.html"], [
          "Escolha uma empresa de avaliação autorizada.",
          "Peça à faculdade o envio do diploma e do histórico, conforme as regras da empresa.",
          "Aguarde o relatório da equivalência."], "Taxa da avaliação", "1 a 2 meses"],
        ["Criar o perfil no Express Entry", "Seus pontos definem se você recebe o convite.", ["Conta online no site do IRCC", "https://www.canada.ca/en/immigration-refugees-citizenship.html"], [
          "Crie a conta no site oficial do IRCC.",
          "Preencha idade, idioma, estudo e experiência.",
          "Veja sua pontuação e acompanhe as rodadas de convites."], "Grátis para criar", "1 dia"],
        ["Receber o convite e enviar os documentos", "Tenha a prova de fundos pronta antes.", ["Site do IRCC", "https://www.canada.ca/en/immigration-refugees-citizenship.html"], [
          "Ao receber o convite, envie os documentos dentro do prazo.",
          "Faça exame médico e biometria quando pedirem.",
          "Pague as taxas e acompanhe online."], "Taxas do IRCC", "Alguns meses"]] },
    eua: { nome: "Estados Unidos", flag: "us", foto: "eua", cap: "Capítulo Estados Unidos", site: "https://travel.state.gov", trad: true,
      extras: [["Prova financeira ou dossiê profissional", "Banco, empregadores e cartas de recomendação", false, true]],
      tarefas: [
        ["Escolher a rota: estudo (F-1) ou EB-2 NIW", "Desconfie de quem promete green card rápido.", ["Site oficial de vistos dos EUA", "https://travel.state.gov"], [
          "F-1: estudar numa escola aprovada, com prova de fundos.",
          "EB-2 NIW: profissional com histórico forte, sem precisar de oferta de emprego.",
          "Leia o capítulo para ver qual combina com o seu perfil."], "Grátis", "1 dia"],
        ["Montar a prova financeira ou o dossiê", "F-1 pede fundos; o NIW pede provas da carreira.", ["Banco, empregadores e cartas de recomendação"], [
          "F-1: extratos que cubram o primeiro ano de estudo e moradia.",
          "NIW: diplomas, cartas, publicações, prêmios e contratos.",
          "Traduza o que estiver em português."], "Traduções", "1 a 3 meses"],
        ["Pagar as taxas e agendar a entrevista", "Inclua a nova taxa de integridade do visto.", ["Site oficial de agendamento consular", "https://travel.state.gov"], [
          "Preencha o formulário DS-160.",
          "Pague as taxas (incluindo a taxa de integridade do visto, de US$ 250).",
          "Agende a biometria e a entrevista no consulado."], "Taxas consulares e US$ 250", "Depende da fila"],
        ["Reforçar a reserva", "É o destino com custo de entrada mais alto do guia.", ["Seu planejamento financeiro"], [
          "Revise a meta na calculadora.",
          "Considere seguro saúde: nos EUA ele é caro e essencial."], "Alto", "Contínuo"]] },
    alemanha: { nome: "Alemanha", flag: "de", foto: "alemanha", cap: "Capítulo Alemanha", site: "https://www.make-it-in-germany.com", trad: true,
      extras: [["Diploma e histórico", "Sua faculdade (verifique o reconhecimento)", true, true]],
      tarefas: [
        ["Checar o reconhecimento do diploma", "Consulte o portal oficial indicado no capítulo.", ["Make it in Germany e a base anabin", "https://www.make-it-in-germany.com"], [
          "Procure sua faculdade e seu curso na base de reconhecimento.",
          "Se não estiver, peça a avaliação oficial do diploma.",
          "Profissões regulamentadas (saúde, por exemplo) têm processo próprio."], "Grátis consultar; avaliação tem taxa", "1 semana a 3 meses"],
        ["Calcular os pontos da Chancenkarte", "Idade, idioma, experiência e diploma contam.", ["Make it in Germany", "https://www.make-it-in-germany.com"], [
          "Use o simulador de pontos do site oficial.",
          "Veja onde dá para ganhar pontos: idioma é o mais rápido.",
          "Se não fechar, a Blue Card exige oferta de emprego com salário mínimo definido."], "Grátis", "1 dia"],
        ["Comprovar o sustento mensal", "Cerca de € 1.091 por mês enquanto procura emprego.", ["Conta bloqueada (Sperrkonto) ou outra prova aceita"], [
          "Junte o valor exigido para o período do visto.",
          "Abra a conta bloqueada se essa for a prova escolhida.",
          "Guarde o comprovante para o consulado."], "O valor fica com você", "2 a 4 semanas"],
        ["Começar o alemão e pedir o visto", "Mesmo o básico soma pontos.", ["Consulado ou embaixada da Alemanha da sua região"], [
          "Estude até o nível A1/A2 e faça a prova certificada.",
          "Agende o pedido de visto no consulado da sua região.",
          "Leve diploma, histórico, prova de idioma e de sustento."], "Curso, prova e taxa do visto", "3 a 6 meses"]] },
    australia: { nome: "Austrália", flag: "au", foto: "australia", cap: "Capítulo Austrália", site: "https://immi.homeaffairs.gov.au", trad: true,
      extras: [["Prova de fundos e seguro OSHC", "Banco e seguradora australiana", false, false]],
      tarefas: [
        ["Escolher o curso e receber a carta de aceite (CoE)", "Só cursos registrados valem para o visto.", ["Escola registrada no CRICOS"], [
          "Escolha um curso registrado no CRICOS.",
          "Faça a matrícula e pague a primeira parte.",
          "Receba o CoE, a confirmação de matrícula."], "Curso", "2 a 4 semanas"],
        ["Comprovar o custo de vida", "AUD 29.710 por ano, além do curso e da passagem.", ["Seu banco"], [
          "Junte o valor exigido numa conta no seu nome.",
          "Tire extratos recentes.",
          "Confira o valor atualizado no site oficial."], "O valor fica com você", "Ao longo dos meses"],
        ["Contratar o seguro saúde de estudante", "Obrigatório durante todo o visto.", ["Seguradoras autorizadas (OSHC)"], [
          "Escolha uma seguradora OSHC.",
          "Contrate pelo período inteiro do visto.",
          "Guarde a apólice."], "Seguro", "1 dia"],
        ["Pedir o visto online", "Pela conta ImmiAccount.", ["ImmiAccount, no site do governo australiano", "https://immi.homeaffairs.gov.au"], [
          "Crie a conta ImmiAccount.",
          "Preencha o pedido e envie os documentos.",
          "Faça biometria e exame médico se pedirem."], "Taxa do visto (valor no site)", "Algumas semanas"]] },
    japao: { nome: "Japão", flag: "jp", foto: "japao", cap: "Capítulo Japão", site: "https://www.moj.go.jp/isa/", trad: true,
      extras: [["Koseki do antepassado e certidões da família", "Prefeitura no Japão e cartórios brasileiros", true, true]],
      tarefas: [
        ["Conseguir o koseki do antepassado", "Sem ele o processo não anda.", ["Prefeitura japonesa onde a família era registrada"], [
          "Descubra a cidade de registro da família no Japão.",
          "Peça o koseki tohon pelo consulado ou por um despachante.",
          "Guarde a tradução."], "Baixo", "1 a 3 meses"],
        ["Reunir as certidões brasileiras da família", "De toda a linha até você.", ["Cartórios de registro civil"], [
          "Certidões de nascimento e casamento de cada geração.",
          "Corrija divergências de nome antes."], "Certidões", "1 mês"],
        ["Apostilar e traduzir", "Primeiro a apostila, depois a tradução para o japonês.", ["Cartório habilitado e tradutor de japonês"], [
          "Apostile os documentos.",
          "Traduza conforme a orientação do consulado."], "Apostilas e traduções", "2 a 4 semanas"],
        ["Pedir o visto de descendente", "A porta mais simples para nikkeis.", ["Consulado-Geral do Japão da sua região", "https://www.moj.go.jp/isa/"], [
          "Agende no consulado e leve todos os documentos.",
          "Lembre: a cidadania japonesa exige abrir mão da brasileira."], "Taxa consular", "Algumas semanas"]] },
    uruguai: { nome: "Uruguai", flag: "uy", foto: "uruguai", cap: "Capítulo Uruguai", site: "https://www.gub.uy/ministerio-interior/", trad: true,
      extras: [],
      tarefas: [
        ["Apostilar e traduzir os antecedentes", "Brasileiro é isento da taxa de residência.", ["Cartório habilitado e tradutor de espanhol"], [
          "Tire os antecedentes da PF (tarefa da primeira fase).",
          "Apostile no cartório.",
          "Traduza para o espanhol se a Migración pedir."], "Apostila e tradução", "1 a 2 semanas"],
        ["Entrar no Uruguai com RG ou passaporte", "Pode entrar como turista e pedir a residência lá.", ["Fronteira ou aeroporto"], [
          "Leve RG ou passaporte em bom estado.",
          "Guarde o comprovante de entrada."], "Passagem", "1 dia"],
        ["Pedir a residência permanente Mercosul", "Direto, sem passar pela temporária.", ["Dirección Nacional de Migración, pelo portal gub.uy", "https://www.gub.uy/ministerio-interior/"], [
          "Inicie o trâmite de residência permanente Mercosul no gub.uy.",
          "Envie os documentos e acompanhe o agendamento.",
          "Guarde o comprovante do pedido."], "Isento para brasileiros", "Alguns meses até a aprovação"],
        ["Tirar a cédula uruguaia", "Com o comprovante do pedido já dá para trabalhar.", ["Dirección Nacional de Identificación Civil"], [
          "Agende a cédula com o comprovante do pedido.",
          "Com a cédula, abra conta e assine contrato de aluguel."], "Taxa baixa", "Algumas semanas"]] },
    argentina: { nome: "Argentina", flag: "ar", foto: "argentina", cap: "Capítulo Argentina", site: "https://www.argentina.gob.ar/interior/migraciones", trad: true,
      extras: [],
      tarefas: [
        ["Apostilar certidão de nascimento e antecedentes", "Os dois são exigidos no pedido.", ["Cartório habilitado e tradutor de espanhol"], [
          "Certidão de nascimento de inteiro teor, apostilada.",
          "Antecedentes da PF, apostilados.",
          "Traduza para o espanhol se pedirem."], "Apostilas e traduções", "1 a 2 semanas"],
        ["Entrar na Argentina como turista", "Brasileiro entra com RG.", ["Fronteira ou aeroporto"], [
          "Leve RG ou passaporte em bom estado.",
          "Guarde o comprovante de entrada."], "Passagem", "1 dia"],
        ["Pedir a residência temporária no RaDEX", "Sistema online da Dirección Nacional de Migraciones.", ["Dirección Nacional de Migraciones (RaDEX)", "https://www.argentina.gob.ar/interior/migraciones"], [
          "Crie o cadastro no RaDEX e envie os documentos.",
          "Pague a taxa de residência.",
          "Com o pedido aceito, você recebe a residência precária e já pode trabalhar."], "Taxa de migração", "Algumas semanas"],
        ["Contratar um seguro saúde", "Desde 2025 a saúde pública só cobre emergência para quem não é permanente.", ["Planos de saúde privados (prepagas)"], [
          "Compare planos para estrangeiros.",
          "Contrate antes de precisar."], "Mensalidade do plano", "1 semana"]] },
    chile: { nome: "Chile", flag: "cl", foto: "chile", cap: "Capítulo Chile", site: "https://serviciomigraciones.cl", trad: true,
      extras: [],
      tarefas: [
        ["Apostilar os antecedentes da PF", "É o documento principal do pedido.", ["Cartório habilitado"], [
          "Tire os antecedentes da PF.",
          "Apostile no cartório.",
          "Escaneie em boa qualidade para o pedido online."], "Apostila", "1 semana"],
        ["Fazer o pedido online ainda no Brasil", "Hoje não dá para trocar o visto de turista estando no Chile.", ["Servicio Nacional de Migraciones", "https://serviciomigraciones.cl"], [
          "Crie a conta no site do Servicio Nacional de Migraciones.",
          "Escolha a residência temporária Mercosul.",
          "Envie passaporte, antecedentes e foto."], "Taxa (valor no site)", "Cerca de 4 meses, segundo relatos"],
        ["Com a aprovação, tirar a cédula", "Documento de identidade de estrangeiro.", ["Registro Civil do Chile"], [
          "Entre no Chile com o visto aprovado.",
          "Agende a cédula no Registro Civil.",
          "Com a cédula, abra conta e assine contrato."], "Taxa da cédula", "Primeiras semanas"],
        ["Planejar a residência definitiva", "Depois de 2 anos de temporária.", ["Servicio Nacional de Migraciones", "https://serviciomigraciones.cl"], [
          "Marque no calendário o fim dos 2 anos.",
          "Peça a definitiva antes de vencer a temporária."], "Taxa", "Antes de vencer"]] },
    paraguai: { nome: "Paraguai", flag: "py", foto: "paraguai", cap: "Capítulo Paraguai", site: "https://www.migraciones.gov.py", trad: true,
      extras: [],
      tarefas: [
        ["Apostilar certidão de nascimento e antecedentes", "Se pedirem, faça também a tradução.", ["Cartório habilitado e tradutor de espanhol"], [
          "Certidão de nascimento de inteiro teor e antecedentes da PF.",
          "Apostile os dois.",
          "Traduza para o espanhol se a Migraciones pedir."], "Apostilas e traduções", "1 a 2 semanas"],
        ["Pedir a residência temporária Mercosul", "Na Migraciones, em Assunção, ou no atendimento itinerante.", ["Dirección Nacional de Migraciones", "https://www.migraciones.gov.py"], [
          "Confira a lista de documentos e a taxa no site da Migraciones.",
          "Dê entrada em Assunção ou no MigraMóvil, quando passar perto da fronteira.",
          "Guarde o comprovante."], "Cerca de 2,3 milhões de guaranis (confira a tabela)", "Algumas semanas"],
        ["Tirar a cédula paraguaia", "Com a residência aprovada.", ["Departamento de Identificaciones da Polícia Nacional"], [
          "Leve a resolução da residência.",
          "Tire a cédula de identidade paraguaia."], "Taxa baixa", "Algumas semanas"],
        ["Preparar a residência permanente", "Peça nos 90 dias antes de vencer os 2 anos.", ["Dirección Nacional de Migraciones", "https://www.migraciones.gov.py"], [
          "Desde julho de 2026 a permanente exige comprovar solvência econômica.",
          "Junte extratos ou comprovante de renda.",
          "Dê entrada antes do vencimento."], "Taxa", "Antes de vencer"]] }
  };

  // ---------------- documentos (o que tirar, onde, apostila, tradução) ----------------
  function documentos(k) {
    const c = P[k];
    const base = [
      ["Passaporte válido", "Polícia Federal", false, false],
      ["Antecedentes criminais", "Polícia Federal, pelo gov.br (grátis)", true, true],
      ["Certidão de nascimento de inteiro teor", "Cartório de registro civil ou registrocivil.org.br", true, true],
      ["Certidão de casamento (se for casado)", "Cartório de registro civil", true, true]
    ];
    return base.concat(c.extras).map(([doc, onde, apost, trad]) => ({ doc, onde, apost, trad: trad && c.trad }));
  }

  return { GERAL, P, documentos };
})();
