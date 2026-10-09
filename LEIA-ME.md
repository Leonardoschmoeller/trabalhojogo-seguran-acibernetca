# CIBERDEFESA — Jogo de Segurança Digital

Jogo educativo sobre segurança digital, feito em HTML, CSS e JavaScript puros.
**Sem bibliotecas externas e sem instalação** — é só abrir o jogo.

---

## 📁 Arquivos

```
index.html                    ← abra ESTE arquivo no navegador
css/estilo.css                ← todo o visual (885 linhas)
js/jogo.js                    ← toda a lógica do jogo (2.254 linhas)
backup-arquivo-unico.html     ← versão antiga, tudo em 1 arquivo só
```

## ▶️ Como jogar

**Abra o `index.html` com dois cliques.** Nada mais é preciso.

> ⚠️ Importante: mantenha a pasta junto. O `index.html` busca o CSS e o JS
> nas pastas `css/` e `js/`. Se você mover só o HTML, ele abre sem estilo e sem jogo.

Precisa enviar o trabalho por e-mail ou colocar no classroom? Use o
`backup-arquivo-unico.html` — é o jogo inteiro dentro de um arquivo só.
**Nesse caso, apague os outros dois** ou renomeie o backup para `index.html`.

---

## 🎮 O jogo

Você entra num computador antigo (CRT、Windows 95) como agente de segurança
digital e passa por **5 missões**:

| # | Fase | O que você faz |
|---|------|----------------|
| 1 | 🧠 Memória | Monta sua sequência de animais e repete na ordem certa |
| 2 | 👤 Perfil Seguro | Cria o avatar, monta uma senha forte, ativa o 2FA |
| 3 | 🎣 Phishing | Acha os sinais de golpe e denuncia o e-mail falso |
| 4 | 📰 Fake News | Separa notícia verdadeira de desinformação |
| 5 | 🚀 Defesa Digital | Space shooter contra vírus, malware e ransomware |

**Controles**
- Fases 1 a 4: tudo funciona **clicando** (arastar é opcional)
- Fase 5: `←` `→` ou `A` `D` movem · `ESPAÇO` atira · `SHIFT` dá dash
- No celular: botões na tela

**Trocar de fase** — botão 🗺️ Missões no HUD, no menu ou na área de trabalho.
Você pode jogar qualquer fase na ordem que quiser.

**Reiniciar o PC** — botão ⟳ na barra de tarefas (ou o ⏻ no gabinete).

---

## ✏️ Onde mexer em cada coisa

**Cores e visual** → `css/estilo.css`
As cores da Fase 3, por exemplo, estão em `.sign` (vermelho) e
`.sign.found` (verde escuro `#1f6b32`).

**Textos das fases** → `js/jogo.js`

| O quê | Onde |
|-------|-------|
| Frases do tutorial | `TUTS` |
| E-mails de phishing | `EMAILS` |
| Notícias do feed | `NOTICIAS` |
| Partes do avatar | `PARTES` |
| Opções de segurança | `OPCOES` |
| Inimigos do jogo de tiro | `ENEMY_TYPES` |
| Power-ups | `POWERUPS` |
| Animals da memória | `ANIMAIS` |
| Frases de encerramento de cada fase | `LESSONS` |

**Ajustar dificuldade** → `js/jogo.js`
- Fases da memória: `const SIZES=[3,4,5,6];`
- Meta do tiro: `goal:20` dentro de `initGame()`
- Vidas: `S.maxLives` no início do arquivo

---

## 🧪 Testes

O jogo foi validado com 8 suítes automatizadas (cerca de 325 verificações)
cobrando: percurso completo do menu à tela final, derrota de vidas, cada
mecânica de cada fase, boot/login do computador, troca de fase e as cores.

---

**Feito com HTML, CSS e JavaScript puros — nenhuma biblioteca, nenhum link externo.**
