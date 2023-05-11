import{_ as e,c as t,o as s,a}from"./app.ca089fe1.js";const o="/assets/zoom-settings.24dc935e.png",l="/assets/dialog.ffd3b262.png",r="/assets/auto-recording.9e7f3f7b.jpg",n="/assets/live-class.4dbcda13.png",b=JSON.parse('{"title":"Live Class","description":"","frontmatter":{},"headers":[{"level":2,"title":"Setup","slug":"setup","link":"#setup","children":[]}],"relativePath":"class-creation/create-a-live-class.md","lastUpdated":1679031742000}'),i={name:"class-creation/create-a-live-class.md"},c=a('<h1 id="live-class" tabindex="-1">Live Class <a class="header-anchor" href="#live-class" aria-hidden="true">#</a></h1><p>Moderators on LMS can host a live session from the class page. The live class will be through Zoom. Once a live class is created all students of the class will receive a calendar invite. All upcoming live classes will be listed on the class page. Students can join the current session from the class page itself.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><p>To use this feature, you must create a Server to Server OAuth App from the Zoom App Marketplace. You can follow <a href="https://marketplace.zoom.us/docs/guides/build/server-to-server-oauth-app/" target="_blank" rel="noreferrer">this document</a> for the same.</p><p>Creating a Server to Server OAuth App provides you with an Account ID, Client ID, and Client Secret. You will have to enter these 3 values in the Zoom Settings Doctype.</p><p><img src="'+o+'" alt="Zoom Settings"></p><p>To send a calendar invite for a live class, you will also need to enable google settings and add the google calendar of the moderator/instructor. To enable Google Settings, follow the steps mentioned in <a href="https://docs.erpnext.com/docs/v12/user/manual/en/erpnext_integration/google_settings" target="_blank" rel="noreferrer">this document</a>.</p><p>Once all this has been set up, you can create a live class. A live class can only be created if a class has students. To create a live class, visit the class page. Click on the button <strong>Create a Live Class</strong>. Fill in the details in the dialog.</p><p><img src="'+l+'" alt="Details"></p><p>For Auto Recording to work ensure that Automatic Recording is enabled on your Zoom Account.</p><p><img src="'+r+'" alt="Auto Recording"></p><p>Once the details are submitted, the live class gets saved in your Zoom Account as well as the LMS backend. A calendar invite also gets sent to all the students of the class.</p><p><img src="'+n+'" alt="Live Class"></p>',13),p=[c];function d(h,u,g,m,_,v){return s(),t("div",null,p)}const A=e(i,[["render",d]]);export{b as __pageData,A as default};