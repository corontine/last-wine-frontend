
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  de: {
    translation: {
      "homeTitle": "Save Berlin restaurants by buying their wine!",
      "homeButtons":["View Map", "Submit"],
      "aboutTitle": "Info",
      "aboutContent": "Durch den Ausbruch der COVID-19 Krise sind viele kleine lokale Unternehmen in Schwierigkeiten gekommen und brauchen die Unterstützung der Nachbarschaft um zu überleben.<br><br>Die Öffnungszeiten von Restaurants, Bäckereien, Cafes und weiteren lokalen Unternehmen ändert sich ständig. Doch bei vielen Unternehmen kann immer noch Ware gekauft werden. Nehmt dieses Angebot an!<br><br>Melde dich bei Fragen oder Anregungen gerne an uns hallo@weinundbrot.org",
      pages: {
        home: {
          title: "Unterstütze lokale Bäkereien und Restaurants in deiner Umgebung!",
          buttons: {
            map: "Karte anzeigen",
            submit: "Unternehmen hinzufügen"
          }
        },
        about:{
          title: "Info",
          content: "Durch den Ausbruch der COVID-19 Krise sind viele kleine lokale Unternehmen in Schwierigkeiten gekommen und brauchen die Unterstützung der Nachbarschaft um zu überleben.<br><br>Die Öffnungszeiten von Restaurants, Bäckereien, Cafes und weiteren lokalen Unternehmen ändert sich ständig. Doch bei vielen Unternehmen kann immer noch Ware gekauft werden. Nehmt dieses Angebot an!<br><br>Melde dich bei Fragen oder Anregungen gerne an uns hallo@weinundbrot.org"
        }
      }
    },
  },
  en: {
    translation: {
      "homeTitle": "Save Berlin restaurants by buying their wine!",
      "homeButtons":["View Map", "Submit"],
      "aboutTitle": "Info",
      "aboutContent": "The COVID-19 outbreak is devastating bars and bakery. We thought we could help them to survive these days.<br/><br/>At the moment these small bars and bakeries could still sell their products until 6 pm.<br/><br/>Most bars and bakeries have thousands of euros in food and alcohol, which they can sell to people who are living next to them. <br/><br/> People can still enjoy their favourite bakery and wine from the bars in the corner.<br/><br/>If you have any question, please write to us hello@weinundbrot.org",
      pages: {
        home: {
          title: "Save Berlin restaurants by buying their wine!",
          buttons: {
            map: "View Map",
            submit: "Submit a location"
          }
        },
        about:{
          title: "Info",
          content: "The COVID-19 outbreak is devastating bars and bakery. We thought we could help them to survive these days.<br/><br/>At the moment these small bars and bakeries could still sell their products until 6 pm.<br/><br/>Most bars and bakeries have thousands of euros in food and alcohol, which they can sell to people who are living next to them. <br/><br/> People can still enjoy their favourite bakery and wine from the bars in the corner.<br/><br/>If you have any question, please write to us hello@weinundbrot.org"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
