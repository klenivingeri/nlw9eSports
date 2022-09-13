# Server eSports
## Pacotes instalados
- express
- @types/express -D
- typescript -D
- ts-node-dev -D // parecido com nodemon, mas para ts


### Dicas
- Alterar de require para import:
Dentro da arquivo package.json adicionar `type: module` e alterar a extenção do arquivo para `mjs`
* Se for usar ts no projeto, verificar o tsconfig.json e package.json que foram alterados para não quebrar


- Configurar typescript
 Executar `npx tsc --init` criar um arquivo de configuração tsconfig.json
 Quando instalamos o typescript a extenção do arquivo muda para `.ts`
