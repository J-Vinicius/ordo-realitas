# 🜏 Ordo Realitas

Sistema web inspirado no universo de RPG paranormal, com foco em rituais, criaturas e gerenciamento de agentes.

---

## 🌐 Estrutura de Rotas

```
/                # Login (tela inicial)
/dashboard       # Hub principal

/dashboard/bestiario
/dashboard/grimorio
/dashboard/agentes
/dashboard/arquivos
/dashboard/missoes
```

- `/` → autenticação
- `/dashboard/...` → área protegida

---

## 🔐 Login (`/`)

Tela inicial do sistema.

### Layout

- Logo central (Ordo Realitas)
- Texto: `Bem vindo, Agente.`
- Inputs:
  - `agent_id`
  - `password`

- Botão: `Acessar sistema`

### Feedback

- `Validando credenciais...`
- `Acesso autorizado`
- `Falha de autenticação`

### Fluxo

```
/ → /dashboard
```

---

## 🧠 Dashboard (`/dashboard`)

Interface principal estilo sistema operacional.

### Layout

**Sidebar:**

- Dashboard
- Bestiário
- Grimório
- Agentes
- Arquivos

**Topbar:**

- Nome do agente
- Patente (Recruta → Elite)
- Status (sanidade / energia)

---

## 🗂️ Home do Dashboard

Interface baseada em “apps”:

```
[ 📜 Grimório ]   [ 👁️ Bestiário ]
[ 🧍 Agentes ]    [ 📁 Arquivos ]
```

Cada item abre um módulo do sistema.

---

## 👁️ Bestiário (`/dashboard/bestiario`)

Catálogo de criaturas estilo dossiê.

### Lista

- Grid de criaturas
- Filtros:
  - Elemento
  - VD (nível de perigo)

### Detalhe

- Nome
- Atributos
- Defesa / Vida
- Resistências / Vulnerabilidades
- Habilidades
- Ações

---

## 📜 Grimório (`/dashboard/grimorio`)

Catálogo de rituais.

### Lista

- Grid de rituais
- Filtros:
  - Elemento
  - Círculo

### Detalhe

- Execução
- Alcance
- Efeito
- Duração
- Resistência
- Formas avançadas

---

## 🧍 Agentes (`/dashboard/agentes`)

Gerenciamento de agentes.

- Nome
- Patente
- Sanidade
- Energia
- Histórico

---

## 📁 Arquivos (`/dashboard/arquivos`)

Sistema de arquivos confidenciais.

- Interface estilo explorer/terminal
- Conteúdos:
  - Logs
  - Relatórios
  - Documentos secretos

---

## 🎨 Sistema de Elementos

Cada item possui um elemento com efeito visual:

- **Morte** → espirais
- **Energia** → glitch
- **Conhecimento** → sigilos animados
- **Sangue** → líquido
- **Medo** → fumaça

---

## 🧬 Modelagem de Dados (Resumo)

```ts
type Elemento = "medo" | "sangue" | "morte" | "conhecimento" | "energia";

interface Item {
  nome: string;
  descricao: string;
  elemento: Elemento;
}

interface Ritual extends Item {
  circulo: number;
  execucao: string;
  alcance: string;
  efeito: string;
}

interface Criatura extends Item {
  vd: number;
  defesa: number;
  pontosVida: number;
}
```

---

## 🧭 Fluxo Geral

```
Login (/)
   ↓
Dashboard (/dashboard)
   ├── Bestiário
   ├── Grimório
   ├── Agentes
   ├── Arquivos
   └── Missões
```

---

## 🧪 Extras (imersão)

- Transições com glitch
- Loading: `Validando acesso...`
- Tema escuro
- Cores:
  - Verde terminal
  - Vermelho alerta

---

## 📌 Observações

- Estrutura pensada para SPA (Vue + Vite ou Next)
- Dashboard funciona como hub de navegação
- Módulos independentes e escaláveis
