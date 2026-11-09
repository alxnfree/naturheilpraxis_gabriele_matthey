# Naturheilpraxis Gabriele Matthey – Konzept B

Dies ist eine zweite, eigenständige Designvariante der Praxiswebsite. Sie nutzt dieselbe Türkis-/Petrol-Farbwelt und das vorhandene Praxislogo, ist aber bewusst anders aufgebaut: editorialer, klarere Raster, stärkerer Kontrast zwischen hellen Inhaltsflächen und dunklen Petrol-Bereichen sowie eine andere Startseitenkomposition.

## Lokal ansehen
1. ZIP-Datei entpacken.
2. Den Ordner öffnen.
3. `index.html` doppelklicken.
4. Die Navigation und die Unterseiten ausprobieren.

## GitHub Pages – als separate zweite Vorschau
1. Ein **neues** GitHub-Repository anlegen, z. B. `naturheilpraxis-matthey-konzept-b`.
2. Den Inhalt dieses entpackten Ordners (nicht die ZIP-Datei und nicht den übergeordneten Ordner) hochladen.
3. Repository → Settings → Pages öffnen.
4. Source: `Deploy from a branch`; Branch: `main`; Folder: `/ (root)`; Save.
5. Die Vorschau ist anschließend unter `https://DEIN-USERNAME.github.io/REPOSITORY-NAME/` erreichbar.

Bitte diese Variante in ein **neues Repository** laden, damit die bereits erstellte erste Website unverändert bleibt.

## Aufbau
- `index.html`: Startseite
- `praxis/`: Vorstellung, Philosophie und Praxisräume
- `diagnostik/`: Ursachenforschung und Diagnoseverfahren
- `therapien/`: Therapieverfahren
- `beschwerden/`: Themenbereiche
- `kontakt/`: Kontaktdaten und Anfahrt
- `impressum/`, `datenschutz/`: rechtliche Entwurfsseiten
- `assets/site.css`: komplettes responsives Design
- `assets/site.js`: mobiles Menü und Navigation
- `assets/logo-mark.png`: Logo-Symbol für Header und Gestaltung
- `assets/logo-original.png`: unveränderte Originalgrafik

## Kontaktdaten
Naturheilpraxis Gabriele Matthey  
Vierlandenstraße 16, 21029 Hamburg  
Telefon: 040 – 724 09 09  
E-Mail: praxismatthey@gmail.com

## Vor einem echten Livegang prüfen
- Neue Porträt- und Praxisfotos einsetzen (Platzhalter sind bewusst vorgesehen).
- Aktuelles Therapieangebot und Diagnoseverfahren mit der Praxis abgleichen.
- Angaben zum beruflichen Werdegang, zur Ausstattung und zur Erreichbarkeit bestätigen.
- Impressum und Datenschutzerklärung vollständig und passend zum tatsächlichen Hosting ergänzen und rechtlich prüfen lassen.
- Inhalte zu Gesundheits- und Diagnoseverfahren fachlich prüfen; keine Heilversprechen ergänzen.

## Suchmaschinen
Diese Konzeptversion enthält `noindex`- und `nofollow`-Anweisungen in den HTML-Seiten. Die `robots.txt` erlaubt das Abrufen der Seiten, damit Suchmaschinen den Noindex-Hinweis überhaupt sehen können. Das ist keine Zugriffssperre: Wer den Link kennt, kann die Website aufrufen. Suchmaschinen können die Indexierung trotzdem nicht mit absoluter Garantie ausschließen.

## Technik
Statische HTML-Seiten, CSS und JavaScript. Kein Framework, kein Build-Schritt, keine kostenpflichtigen Abhängigkeiten. Die internen Links sind relativ aufgebaut und für die GitHub-Pages-Projektadresse geeignet.
