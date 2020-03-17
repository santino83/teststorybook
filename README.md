

# Inizializzo il progetto con nx e creo un'app di default di nome storybook 

npm init nx-workspace

# Aggiungo storybook

npm install @storybook/angular --save-dev

npm install @storybook/addon-knobs --save-dev

npm install babel-loader @babel/core@latest --save-dev

# Aggiungo il supporto a storybook in nrwl

npm install @nrwl/storybook --save-dev

# Creo una libreria di demo con un componente di esempio

ng g lib mylib --directory=mynamespace

ng g component firstcomponent --project mynamespace-mylib

# Configuro storybook per la libreria appena creata e gli faccio generare la storia di default per il componente "firstcomponent"

nx g @nrwl/angular:storybook-configuration mynamespace-mylib

# Testo il tutto: tutto ok

nx run mynamespace-mylib:storybook

# Aggiungo Docs a storybook

npm install @storybook/addon-docs --save-dev

# Lo faccio caricare globalmente andando a modificare .storybook/addons.js

import '@storybook/addon-docs/register';

# Installo compodoc

npm install --save-dev @compodoc/compodoc

# Aggiungo uno script in package.json

"docs:json": "compodoc -p ./tsconfig.json -e json -d .",

# Creo il documentation.json di default:

npm run docs:json

# Tutto ok

A questo punto, la guida ufficiale di storybook dice di seguire questa procedura: https://github.com/storybookjs/storybook/tree/next/addons/docs/angular ma se inserisco preview.ts non mi compila piu
storybook, e quindi non so come configurare Docs per leggere documentation.json e funzionare
