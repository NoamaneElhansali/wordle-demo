import React, { useEffect } from 'react';

const NotificationComponent = () => {
  // Fonction pour demander la permission des notifications
  const requestNotificationPermission = () => {
    if ("Notification" in window) {
      // Vérifier si la permission est déjà accordée ou refusée
      if (Notification.permission === "granted") {
        showNotification(); // Si déjà accordé, afficher la notification
      } else if (Notification.permission === "default") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            showNotification();
          } else {
            console.log("Permission de notification refusée");
          }
        });
      } else {
        console.log("Permission de notification refusée dans le passé.");
      }
    } else {
      console.log("Les notifications ne sont pas supportées par ce navigateur.");
    }
  };

  // Fonction pour afficher la notification
  const showNotification = () => {
    if (Notification.permission === "granted") {
      const notification = new Notification("Klika lm7achra !", {
        body: "Salam awl tjriba 3ndi b had netification.",
        icon: "https://icons.veryicon.com/png/o/miscellaneous/logo-design-of-lingzhuyun/icon-correct-24-1.png",
        img :"https://icons.veryicon.com/png/o/miscellaneous/logo-design-of-lingzhuyun/icon-correct-24-1.png"
      });

      notification.onclick = () => {
        window.open("https://facebook.com");
      };
    }
  };

  // Utiliser useEffect pour vérifier la permission au chargement du composant
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <div>
      <h1>Notifications avec React</h1>
      <p>Cliquez sur le bouton ci-dessous pour déclencher une notification.</p>
      <button onClick={requestNotificationPermission}>
        Afficher une notification
      </button>
    </div>
  );
};

export default NotificationComponent;
