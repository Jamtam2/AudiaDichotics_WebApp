import consumer from "./consumer"

// Replace <%= current_user.tenant_id %> and <%= current_user.id %> with actual dynamic values in your app.
// This example assumes you are injecting them via the Rails view as embedded Ruby.

consumer.subscriptions.create(
  {
    channel: "TranscriptionChannel",
    tenant_id: "<%= current_user.tenant_id %>",  // Replace this with how you access the current user's tenant ID in your view
    user_id: "<%= current_user.id %>"           // Replace this with how you access the current user's ID in your view
  },
  {
    connected() {
      console.log("Connected to the transcription channel");
    },

    disconnected() {
      console.log("Disconnected from the transcription channel");
    },

    received(data) {
      console.log("Received transcript:", data.transcript);
      // Display the transcription to the user
      document.getElementById("transcript").innerText = data.transcript;
    }
  }
);
