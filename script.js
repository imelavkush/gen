function askAI() {
  let subject = document.getElementById("subject").value;
  let hours = document.getElementById("hours").value;
  let level = document.getElementById("level").value;
  let chat = document.getElementById("chat");

  if (!subject || !hours || !level) {
    chat.innerHTML = "⚠️ Please enter all details.";
    return;
  }

  let aiResponse = "";

  if (level === "weak") {
    aiResponse = `
    For ${subject}, since you are weak:
    ➤ Focus more on basics
    ➤ 60% theory, 40% practice
    ➤ Daily revision recommended
    `;
  }

  if (level === "average") {
    aiResponse = `
    For ${subject}, average level detected:
    ➤ Balanced theory & practice
    ➤ Solve previous questions
    ➤ Weekly mock tests
    `;
  }

  if (level === "strong") {
    aiResponse = `
    For ${subject}, strong level detected:
    ➤ Advanced problems
    ➤ Competitive questions
    ➤ Speed & accuracy training
    `;
  }

  chat.innerHTML = `
  🤖 <b>AI Plan</b><br>
  ⏱ ${hours} Hours / Day<br><br>
  ${aiResponse}<br>
  📊 Productivity Score: ${hours * 10}%
  `;
}
