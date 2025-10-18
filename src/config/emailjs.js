// Configuration EmailJS
// IMPORTANT: Remplacez ces valeurs par vos propres clés EmailJS pour que le formulaire fonctionne

export const EMAILJS_CONFIG = {
  // Votre Service ID (ex: service_xxxxxxx)
  // Obtenez-le depuis: https://dashboard.emailjs.com/admin/integration
  SERVICE_ID: 'service_fp5c0qx', // ✅ CONFIGURÉ
  
  // Votre Template ID (ex: template_xxxxxxx)  
  // Obtenez-le depuis: https://dashboard.emailjs.com/admin/templates
  TEMPLATE_ID: 'template_f8nw45h', // ✅ CONFIGURÉ
  
  // Votre Public Key (ex: xxxxxxxxxxxxxxxxxx)
  // Obtenez-le depuis: https://dashboard.emailjs.com/admin/account
  PUBLIC_KEY: '3lmsy9Rgbc7Kz50GK' // ✅ CONFIGURÉ
};

// Template de l'email qui sera envoyé
export const EMAIL_TEMPLATE = {
  subject: 'Nouveau message depuis votre portfolio',
  to_email: 'meryembenaami@gmail.com',
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  subject_line: '{{subject}}',
  message: '{{message}}',
  sent_date: '{{sent_date}}'
};

// Instructions pour configurer EmailJS:
/*
1. Créez un compte sur https://www.emailjs.com/
2. Connectez votre service email (Gmail recommandé)
3. Créez un template avec ces variables:
   - {{from_name}} - Nom de l'expéditeur
   - {{from_email}} - Email de l'expéditeur  
   - {{subject}} - Sujet du message
   - {{message}} - Contenu du message
4. Remplacez les valeurs ci-dessus par vos vraies clés
5. Testez le formulaire
*/

