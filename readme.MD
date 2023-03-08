## Prerekvizity
 - `node.js v18.14.2`
 - `MySQL server 8.0.32`
 - `npm v9.5.0`

## Spuštění 
 - [ ] `git clone https://github.com/xvlasa14/bcApp.git`
 - [ ] `npm install`
 - [ ] vytvořit `.env` soubor obsahující:
 
		 DATABASE_URL="mysql://user:password@host:port/db_name
		 PORT=3000
		 HOST=127.0.0.1
- [ ] `npx prisma migrate dev` by mělo sestavit databázi a naplnit ji modelovými daty 
- [ ] `npm run dev` spustí server a hlídá změny v kódu
- [ ] `npm run stage` jen spustí server, vhodné pro prozkoumávání API
	
## API
API je funkční na základě CRUD pro všechny entity,  tedy následující:
- **user** je jednoduše uživatel. Váže se na doktora, ale nutně nemusí, měly by se mu dodělat role, autentikace a autorizace, minimálně pro    doktorský a adminský přístup
- **doctor** je navázaný na uživatele. Doktor nemůže existovat bez uživatelského účtu a tak je při vytváření nutné zadat do 	JSON objektu    i ID uživatele.
- **patient** je pacient identifikovaný jen dle svého ID, roku narození a pohlaví (pohlaví psáno jako `sex` a ne `gender`, aby bylo    uvedeno specificky biologické pohlaví.
- **test** je takovým rodičem `partům`, má název a další atributy, mezi které patří právě sada částí. Těch má test alespoň jednu. Pokud    test stojí na stromové struktuře, `test` je `root`.
- **part** je jednotlivá část testu. Může mít `0-n` subpartů, neboli subtestů. Každý part má mimo jiné i sadu norem, pokud tedy je    `part` například **kreslení** pak musí mít `1-n` norem.
- **norm**(a) je definována věkovým rozhraním a nějakou hodnotou pro toto rozhraní. 
- **exam** neboli zkouška představuje vystavení pacienta sadě testů (nebo jednomu testu). Jedná se o propojení testu s pacientem a má    přiřazené výsledky skrze návaznost testu na daný part.
- **result** již zmíněný výsledek testu/testování.
- **record** je záznam o dané diagnóze pacienta doktorem.
**Diagnózy** a **medikace** ještě zmíněny nebyly. Pro diagnózy je momentálním řešením vyhledávání dat v `JSON` souboru, pro medikace se využívá oficiální API od SÚKL 