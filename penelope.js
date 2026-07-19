// 🛑 SECURITY: API KEY SPLIT 🛑
const KEY_PART_1 = "AQ.Ab8RN6KwPOcqyX"; 
const KEY_PART_2 = "5lXWdB7iueLyLkcTIyGbikQf_N4-fuDVgbVQ";
const GEMINI_API_KEY = KEY_PART_1 + KEY_PART_2;

(function () {
    // Prevent multiple initializations
    if (window.PenelopeInitialized) return;
    window.PenelopeInitialized = true;

    // Load External Dependencies (Markdown & EmailJS)
    const loadScript = (src) => new Promise((resolve) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        document.head.appendChild(s);
    });

    const injectStyles = () => {
        const style = document.createElement('style');
        style.innerHTML = `
            /* ─── PENELOPE AVATAR ─── */
            #penelope-widget {
                position: fixed;
                bottom: 2rem;
                left: 1.5rem;
                z-index: 10000;
                font-family: 'Inter', sans-serif;
            }

            #penelope-avatar {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                border: 2px solid #0ea5e9;
                box-shadow: 0 10px 25px rgba(14, 165, 233, 0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
                position: relative;
            }

            #penelope-avatar:hover {
                transform: scale(1.08);
                box-shadow: 0 15px 35px rgba(14, 165, 233, 0.5);
            }

            #penelope-avatar i {
                font-size: 1.6rem;
                color: #0ea5e9;
                transition: transform 0.4s ease;
            }

            .penelope-pulse {
                position: absolute;
                inset: 0;
                border-radius: 50%;
                background: rgba(14, 165, 233, 0.4);
                z-index: -1;
                animation: pPing 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
            }

            @keyframes pPing {
                75%, 100% { transform: scale(1.8); opacity: 0; }
            }

            /* ─── PENELOPE CHAT WINDOW ─── */
            #penelope-chatbox {
                position: absolute;
                bottom: 80px;
                left: 0;
                width: 360px;
                height: 550px;
                max-height: 80vh;
                background: rgba(250, 249, 246, 0.95);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(14, 165, 233, 0.2);
                border-radius: 20px;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                
                /* Animation properties */
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                pointer-events: none;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                transform-origin: bottom left;
            }

            #penelope-chatbox.open {
                opacity: 1;
                transform: translateY(0) scale(1);
                pointer-events: auto;
            }

            /* ─── FULLSCREEN (EXPLODED) MODE ─── */
            #penelope-chatbox.fullscreen {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                max-height: 100vh;
                border-radius: 0;
                border: none;
                z-index: 10001; /* Ensure it stays above everything */
            }

            /* Hide avatar when fullscreen */
            #penelope-widget.is-fullscreen #penelope-avatar {
                display: none;
            }

            /* ─── CHAT HEADER ─── */
            #p-header {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                padding: 1.2rem 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 2px solid #0ea5e9;
                flex-shrink: 0;
            }

            .p-header-info {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }

            .p-header-icon {
                width: 36px;
                height: 36px;
                background: rgba(14, 165, 233, 0.15);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #0ea5e9;
                font-size: 1.1rem;
            }

            .p-header-text h3 {
                margin: 0;
                color: #ffffff;
                font-size: 1rem;
                font-family: 'Space Grotesk', sans-serif;
                font-weight: 700;
                letter-spacing: 0.5px;
            }

            .p-header-text span {
                font-size: 0.7rem;
                color: #10b981;
                font-family: 'JetBrains Mono', monospace;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 4px;
            }

            .p-status-dot {
                width: 6px; height: 6px; background: #10b981; border-radius: 50%;
                box-shadow: 0 0 8px #10b981;
            }

            .p-header-actions {
                display: flex;
                gap: 0.8rem;
                align-items: center;
            }

            .p-action-btn {
                background: none; 
                border: none; 
                color: #94a3b8; 
                font-size: 1.1rem; 
                cursor: pointer;
                transition: color 0.2s;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .p-action-btn:hover { color: #f97316; }
            #p-expand:hover { color: #0ea5e9; } /* Blue hover for expand */

            /* ─── MESSAGES AREA ─── */
            #p-messages {
                flex-grow: 1;
                padding: 1.5rem;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                scrollbar-width: thin;
                scrollbar-color: rgba(14, 165, 233, 0.3) transparent;
            }
            #p-messages::-webkit-scrollbar { width: 5px; }
            #p-messages::-webkit-scrollbar-thumb { background: rgba(14, 165, 233, 0.3); border-radius: 5px; }

            .p-msg {
                max-width: 85%;
                padding: 12px 16px;
                font-size: 0.9rem;
                line-height: 1.5;
                animation: slideUpFade 0.3s ease-out forwards;
                opacity: 0;
                transform: translateY(10px);
            }

            /* Adjust message width in fullscreen for better readability */
            #penelope-chatbox.fullscreen .p-msg {
                max-width: 75%;
                font-size: 1rem; /* Slightly larger text in fullscreen */
            }
            @media (max-width: 768px) {
                 #penelope-chatbox.fullscreen .p-msg {
                    max-width: 90%;
                 }
            }

            @keyframes slideUpFade {
                to { opacity: 1; transform: translateY(0); }
            }

            .p-msg.bot {
                align-self: flex-start;
                background: #ffffff;
                color: #0f172a;
                border-radius: 2px 16px 16px 16px;
                border: 1px solid rgba(0,0,0,0.05);
                box-shadow: 0 4px 6px rgba(0,0,0,0.02);
            }

            .p-msg.user {
                align-self: flex-end;
                background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
                color: #ffffff;
                border-radius: 16px 2px 16px 16px;
                box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
            }
            
            /* Markdown Styling for Output */
            .p-msg strong { color: #0284c7; }
            .p-msg h1, .p-msg h2, .p-msg h3 { margin: 10px 0; color: #0ea5e9; font-size: 1rem; }
            .p-msg ul { padding-left: 20px; margin: 5px 0; }

            .p-typing {
                display: flex; gap: 4px; align-items: center; padding: 16px;
            }
            .p-dot {
                width: 6px; height: 6px; background: #94a3b8; border-radius: 50%;
                animation: pType 1.4s infinite ease-in-out both;
            }
            .p-dot:nth-child(1) { animation-delay: -0.32s; }
            .p-dot:nth-child(2) { animation-delay: -0.16s; }
            @keyframes pType {
                0%, 80%, 100% { transform: scale(0); }
                40% { transform: scale(1); }
            }

            /* ─── INPUT AREA ─── */
            #p-input-area {
                padding: 1rem;
                background: #ffffff;
                border-top: 1px solid rgba(0,0,0,0.05);
                display: flex;
                gap: 0.5rem;
                flex-shrink: 0;
            }

            #p-input {
                flex-grow: 1;
                border: 1px solid rgba(14, 165, 233, 0.2);
                background: #f8fafc;
                border-radius: 20px;
                padding: 0.75rem 1rem;
                font-family: 'Inter', sans-serif;
                font-size: 0.9rem;
                outline: none;
                transition: border-color 0.3s;
                color: #0f172a;
            }
            
            #penelope-chatbox.fullscreen #p-input {
                font-size: 1rem;
                padding: 1rem 1.5rem;
            }

            #p-input:focus { border-color: #0ea5e9; }

            #p-send {
                width: 42px; height: 42px;
                border-radius: 50%;
                background: #0f172a;
                color: #fff;
                border: none;
                display: flex; align-items: center; justify-content: center;
                cursor: pointer;
                transition: all 0.3s;
                flex-shrink: 0;
            }
            
            #penelope-chatbox.fullscreen #p-send {
                width: 50px; height: 50px;
            }

            #p-send:hover { background: #0ea5e9; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3); }

            /* Mobile Responsiveness (When NOT fullscreen) */
            @media (max-width: 480px) {
                #penelope-widget { bottom: 1.5rem; left: 1rem; }
                #penelope-chatbox:not(.fullscreen) {
                    width: calc(100vw - 2rem);
                    height: 60vh;
                    bottom: 70px;
                }
            }
        `;
        document.head.appendChild(style);
    };

    const buildDOM = () => {
        const widget = document.createElement('div');
        widget.id = 'penelope-widget';
        widget.innerHTML = `
            <div id="penelope-chatbox">
                <div id="p-header">
                    <div class="p-header-info">
                        <div class="p-header-icon"><i class="fas fa-robot"></i></div>
                        <div class="p-header-text">
                            <h3>Penelope v1.3</h3>
                            <span><div class="p-status-dot"></div> Online · Chief of Staff</span>
                        </div>
                    </div>
                    <div class="p-header-actions">
                        <button id="p-expand" class="p-action-btn" title="Expand"><i class="fas fa-expand-arrows-alt"></i></button>
                        <button id="p-close" class="p-action-btn" title="Close"><i class="fas fa-times"></i></button>
                    </div>
                </div>
                <div id="p-messages">
                    <div class="p-msg bot">
                        <strong>Hello!</strong> I am Penelope, SM-Bello's autonomous agent. I know his entire research pipeline, resume, and technical stack.<br><br>How can I assist you today?
                    </div>
                </div>
                <div id="p-input-area">
                    <input type="text" id="p-input" placeholder="Ask me about his projects..." autocomplete="off">
                    <button id="p-send"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
            
            <div id="penelope-avatar" title="Chat with Penelope">
                <div class="penelope-pulse"></div>
                <i class="fas fa-bolt"></i>
            </div>
        `;
        document.body.appendChild(widget);
    };

    const initLogic = async () => {
        // Dependencies
        await Promise.all([
            loadScript("https://cdn.jsdelivr.net/npm/marked/marked.min.js"),
            loadScript("https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"),
            loadScript("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js")
        ]);
        
        // EmailJS Init
        emailjs.init("9DloHYatGRyjwuntn"); // Public Key
        const SERVICE_ID = "service_d1k7ewd";
        const TEMPLATE_ID = "template_8jdi5qd";

        // Logic variables
        let knowledge = {};
        try { const res = await fetch('./assets/me.json'); knowledge = await res.json(); } catch(e) { console.warn("me.json not found"); }
        
        const pageContext = document.body.innerText.substring(0, 3000);
        let chatHistory = [];
        let contactMode = false;

        const messages = document.getElementById('p-messages');
        const input = document.getElementById('p-input');

        const appendMessage = (text, sender, isMarkdown = false) => {
            const msg = document.createElement('div');
            msg.className = `p-msg ${sender}`;
            msg.innerHTML = isMarkdown ? marked.parse(text) : text;
            messages.appendChild(msg);
            messages.scrollTop = messages.scrollHeight;
        };

        const showTyping = () => {
            const typing = document.createElement('div');
            typing.className = `p-msg bot p-typing`;
            typing.id = 'p-typing-indicator';
            typing.innerHTML = `<div class="p-dot"></div><div class="p-dot"></div><div class="p-dot"></div>`;
            messages.appendChild(typing);
        };

        const removeTyping = () => {
            const typing = document.getElementById('p-typing-indicator');
            if (typing) typing.remove();
        };

        const handleSend = async () => {
            const text = input.value.trim();
            if (!text) return;

            appendMessage(text, 'user');
            input.value = '';
            showTyping();

            // Handle Email Routing Logic
            if (contactMode) {
                try {
                    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                        user_email: text,
                        chat_log: chatHistory.map(m => m.parts[0].text).join('\n')
                    });
                    removeTyping();
                    appendMessage("<strong>Message Successfully Transmitted!</strong><br>Mohammed has received your chat logs and will reach out to you shortly.", 'bot', true);
                } catch (error) {
                    removeTyping();
                    appendMessage("My comms link to the mail server failed. Please email him directly at <strong>bellosanidrescue@gmail.com</strong>.", 'bot', true);
                }
                contactMode = false;
                return;
            }

            // Normal AI Logic
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                    method: 'POST', headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        systemInstruction: { parts: [{ text: `
                            You are Penelope, autonomous Chief of Staff for Mohammed Bello Sani. 
                            Knowledge: ${JSON.stringify(knowledge)}. 
                            Context: ${pageContext}. 
                            If the user expresses intent to hire, contact, or talk to Mohammed, reply ONLY: [TRIGGER_EMAIL_ROUTING]. 
                            Otherwise, format responses beautifully with Markdown.
                        `}] },
                        contents: [...chatHistory, { role: "user", parts: [{ text }] }]
                    })
                });
                const data = await response.json();
                const reply = data.candidates[0].content.parts[0].text;
                
                chatHistory.push({ role: "user", parts: [{ text }] }, { role: "model", parts: [{ text: reply }] });
                removeTyping();

                if (reply.includes("[TRIGGER_EMAIL_ROUTING]")) {
                    contactMode = true;
                    appendMessage("I would be happy to connect you directly with Mohammed! Please reply with your **Email Address**.", 'bot', true);
                } else {
                    appendMessage(reply, 'bot', true);
                }
            } catch (err) {
                removeTyping();
                appendMessage("My comms link is experiencing interference. Please email <strong>bellosanidrescue@gmail.com</strong>.", 'bot', true);
            }
        };

        document.getElementById('p-send').addEventListener('click', handleSend);
        document.getElementById('p-input').addEventListener('keypress', (e) => { if(e.key === 'Enter') handleSend() });
        document.getElementById('p-expand').addEventListener('click', () => document.getElementById('penelope-chatbox').classList.toggle('fullscreen'));
        document.getElementById('penelope-avatar').addEventListener('click', () => document.getElementById('penelope-chatbox').classList.add('open'));
        document.getElementById('p-close').addEventListener('click', () => document.getElementById('penelope-chatbox').classList.remove('open'));
    };

    injectStyles(); buildDOM(); initLogic();
})();
