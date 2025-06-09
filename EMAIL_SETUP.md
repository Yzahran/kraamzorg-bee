# Email Setup Instructies voor Kraamzorg Bee

## Overzicht
De contactformulieren op de website gebruiken EmailJS om emails te versturen. Dit betekent dat er geen backend server nodig is - alles werkt vanuit de frontend. Het "Werken Bij" formulier is een eenvoudig interesseformulier zonder CV upload.

## Stap 1: EmailJS Account Aanmaken

1. Ga naar [EmailJS.com](https://www.emailjs.com/)
2. Maak een gratis account aan
3. Verifieer je email adres

## Stap 2: Email Service Instellen

1. Log in op je EmailJS dashboard
2. Ga naar "Email Services"
3. Klik op "Add New Service"
4. Kies je email provider (bijv. Gmail, Outlook, etc.)
5. Volg de instructies om je email account te verbinden
6. Noteer de **Service ID** (bijv. `service_abc123`)

## Stap 3: Email Templates Maken

Je hebt precies 2 templates nodig voor de gratis versie:

### Template 1: Algemeen Contact (template_contact)
1. Ga naar "Email Templates"
2. Klik "Create New Template"
3. Gebruik deze template:

```
Onderwerp: Nieuw contactbericht van {{from_name}}

Van: {{from_name}}
Email: {{from_email}}
Telefoon: {{phone}}

Bericht:
{{message}}

---
Dit bericht is verzonden via het contactformulier op kraamzorgbee.nl
```

4. Sla op en noteer de **Template ID**

### Template 2: Interesse Werken Bij (template_interest)
1. Maak de tweede template
2. Gebruik deze eenvoudige template voor interesse:

```
Onderwerp: Nieuwe interesse voor Kraamzorg Bee

Van: {{from_name}}
Email: {{from_email}}
Telefoon: {{phone}}

Motivatie & Bericht:
{{message}}

---
Deze interesse is verzonden via kraamzorgbee.nl/werken-bij
Antwoord direct op deze email om contact op te nemen.

Let op: De sollicitant wordt gevraagd om het CV apart te mailen naar info@kraamzorgbee.nl
```

3. Sla op en noteer de **Template ID**

## Stap 4: Public Key Ophalen

1. Ga naar "Account" in je EmailJS dashboard
2. Kopieer je **Public Key**

## Stap 5: Configuratie Instellen

Maak een `.env` bestand in de root van je project met:

```env
REACT_APP_EMAILJS_SERVICE_ID=jouw_service_id_hier
REACT_APP_EMAILJS_TEMPLATE_CONTACT=jouw_contact_template_id_hier
REACT_APP_EMAILJS_TEMPLATE_INTEREST=jouw_interest_template_id_hier
REACT_APP_EMAILJS_PUBLIC_KEY=jouw_public_key_hier
```

**Vervang de waarden met je eigen EmailJS gegevens!**

## Stap 6: Testen

1. Start je development server: `npm start`
2. Ga naar het interesseformulier: `http://localhost:3000/werken-bij`
3. Vul het formulier in en verstuur
4. Controleer of je de email ontvangt op info@kraamzorgbee.nl

## 📧 Hoe het werkt

### Interesse formulier:
- **Eenvoudig contact formulier** zonder file uploads
- **Automatische herinnering** dat CV apart gemaild moet worden
- **Binnen gratis EmailJS limiet** - geen extra kosten

### Voor sollicitanten:
- Vul interesse formulier in op de website
- Krijg bevestiging dat interesse is verzonden
- Worden herinnerd om CV apart te mailen naar info@kraamzorgbee.nl

### Voor de ontvanger:
- Je krijgt interesse-informatie via email
- Sollicitant wordt automatisch geïnformeerd om CV apart te mailen
- Geen complexe file handling - alles blijft simpel

## Troubleshooting

### Emails komen niet aan
- Controleer je spam/junk folder
- Verifieer dat alle EmailJS IDs correct zijn ingevuld
- Check de browser console voor error berichten

### "User ID is required" error
- Zorg dat je Public Key correct is ingesteld in de `.env` file

### Template errors
- Controleer dat de template variabelen ({{from_name}}, etc.) exact overeenkomen
- Zorg dat beide templates correct zijn ingesteld

## Kosten
- **Volledig gratis** met EmailJS gratis tier
- 200 emails per maand - ruim voldoende voor de meeste websites
- Geen extra kosten voor file uploads omdat we die niet gebruiken

## Beveiliging
- De Public Key mag publiek zijn (zit in de frontend code)
- Je email credentials blijven veilig bij EmailJS
- Geen file uploads = geen beveiligingsrisico's met bestanden

## Template Limiet
- **Gratis EmailJS**: Maximaal 2 templates - perfect voor deze setup
- **Template 1**: Algemeen contact
- **Template 2**: Interesse werken bij
- Geen upgrade nodig!

## CV Proces
- **Sollicitanten** vullen interesse formulier in
- **Automatische herinnering** om CV apart te mailen
- **Jij ontvangt** interesse via email + CV via aparte email
- **Eenvoudig** en binnen gratis limiet

---

**Belangrijk**: 
- Vergeet niet om de `.env` file toe te voegen aan je `.gitignore`
- Test grondig voordat je live gaat
- Informeer sollicitanten dat ze CV apart moeten mailen
- Volledig gratis oplossing - geen extra kosten! 