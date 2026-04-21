# 🏡 Shady Meadows B&B — Projeto de QA Automation

![Cypress](https://img.shields.io/badge/Cypress-E2E-brightgreen?logo=cypress)
![Jira](https://img.shields.io/badge/Jira-Xray-0052CC?logo=jira)
![Status](https://img.shields.io/badge/Testes-A%20Passar-success)
![BDD](https://img.shields.io/badge/BDD-Cucumber-23D96C?logo=cucumber)

> Suite de testes End-to-End para a plataforma de reservas [Shady Meadows B&B](https://automationintesting.online/), desenvolvida com Cypress e gerida no Jira + Xray para rastreabilidade completa.

---

## 📋 Visão Geral do Projeto

Este projeto cobre o fluxo completo de reserva de quarto do site Shady Meadows B&B — desde a seleção de datas até à confirmação da reserva. Combina **testes manuais**, **testes E2E automatizados** e **gestão de testes** com Jira + Xray.

| Camada | Ferramenta |
|---|---|
| Gestão de Testes | Jira + Xray |
| Framework de Automação | Cypress |
| BDD / Design de Testes | Cucumber (Gherkin) |
| Aplicação em Teste | automationintesting.online |

---

## 🗂️ Estrutura do Projeto

```
cypress/
├── e2e/
│   └── fluxo_reserva.cy.js     # Teste E2E principal: fluxo completo de reserva
├── fixtures/
│   └── example.json
├── results/
│   └── results-*.xml           # JUnit XML gerado pelo Cypress
├── screenshots/
│   └── evidencia-reserva-sucesso-SM8.png
└── support/
cypress.config.js
package.json
```

---

## ✅ Cobertura de Testes

### User Story Coberta
**US01 — Reserva de Quarto: Seleção de Datas e Preenchimento de Dados** (`SM-1`)

| # | Critério de Aceitação | Estado |
|---|---|---|
| AC1 | O utilizador consegue selecionar as datas de Check-in e Check-out | ✅ Concluído |
| AC2 | Campos obrigatórios validados (Nome, Apelido, Email, Telefone) | ✅ Concluído |
| AC3 | O sistema impede reservas com datas no passado | ✅ Concluído |
| AC4 | Mensagem "Booking Confirmed" exibida após sucesso | ✅ Concluído |
| AC5 | API responde com status 201 e dados persistidos corretamente | ✅ Concluído |

### Casos de Teste Executados

| Chave | Título | Tipo | Estado |
|---|---|---|---|
| SM-2 | CT01 — Validar campos obrigatórios do formulário | Manual | ✅ CONCLUÍDO |
| SM-3 | CT02 — Comportamento do calendário e seleção de datas | Manual | ✅ CONCLUÍDO |
| SM-4 | CT03 — Validar UI/UX e mensagem de sucesso em modo responsivo | Manual | ✅ CONCLUÍDO |
| SM-8 | CT06 — Reserva de Quarto: Fluxo Completo | Automatizado (Cucumber) | ✅ PASSOU |

### Execução de Testes (SM-14)

O registo de execução **SM-14** foi criado manualmente no Xray após correr a suite Cypress localmente. O resultado do teste SM-8 foi marcado como **PASSOU** com base no output do run local e na evidência em screenshot capturada automaticamente pelo Cypress (`evidencia-reserva-sucesso-SM8.png`).

> **Nota:** A importação automática do JUnit XML para o Xray via API foi tentada mas não concluída nesta iteração. A atualização do resultado foi feita manualmente. Automatizar este passo está registado em [Trabalho Futuro](#-trabalho-futuro).

---

## 🥒 Cenário BDD (Gherkin)

```gherkin
Feature: Reserva de Quarto - Fluxo Completo

  Como utilizador do site Shady Meadows
  Quero navegar desde a página inicial até à confirmação de reserva
  Para garantir que todo o processo de reserva funciona corretamente

  Scenario: Efetuar reserva com sucesso a partir da página inicial
    Given estou na página inicial do site "Shady Meadows"
    When clico no botão "Rooms" para navegar até à secção
    And clico no botão "Book now" do quarto "Single Room"
    And seleciono um período de estadia válido no calendário
    And preencho os dados do hóspede:
      | Campo      | Valor               |
      | First Name | Miguel              |
      | Last Name  | Guedes              |
      | Email      | Miguel@example.com   |
      | Phone      | 123456789012        |
    And clico no botão "Reserve Now"
    Then o sistema deve exibir a mensagem "Booking Confirmed"
    And a reserva deve ser confirmada com as datas selecionadas
```

---

## 🔮 Trabalho Futuro

- [ ] Automatizar a importação do JUnit XML para o Xray via API após cada run
- [ ] Adicionar cenários de teste negativos (datas inválidas, campos em falta)
- [ ] Integrar com pipeline CI/CD (GitHub Actions)
- [ ] Expandir cobertura para outros quartos e casos limite

---

## 🧰 Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** — Testes E2E rápidos e fiáveis
- **[Jira](https://www.atlassian.com/software/jira)** — Gestão de projeto e issues
- **[Xray](https://www.getxray.app/)** — Gestão de testes para Jira
- **[Cucumber/Gherkin](https://cucumber.io/)** — Design de testes BDD
- **[automationintesting.online](https://automationintesting.online/)** — Aplicação de prática

---

## 👤 Miguel Guedes
Este projeto tem fins educativos e de portfólio.
