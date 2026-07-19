(function () {
    // Prevent multiple initializations
    if (window.PenelopeInitialized) return;
    window.PenelopeInitialized = true;

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

            /* ─── CHAT HEADER ─── */
            #p-header {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                padding: 1.2rem 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 2px solid #0ea5e9;
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

            #p-close {
                background: none; border: none; color: #94a3b8; font-size: 1.2rem; cursor: pointer;
                transition: color 0.2s;
            }
            #p-close:hover { color: #f97316; }

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
            }
            #p-send:hover { background: #0ea5e9; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3); }

            /* Mobile Responsiveness */
            @media (max-width: 480px) {
                #penelope-widget { bottom: 1.5rem; left: 1rem; }
                #penelope-chatbox {
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
                            <h3>Penelope v1.2</h3>
                            <span><div class="p-status-dot"></div> Online · Chief of Staff</span>
                        </div>
                    </div>
                    <button id="p-close"><i class="fas fa-times"></i></button>
                </div>
                <div id="p-messages">
                    <div class="p-msg bot">
                        Hello! I am Penelope, SM-Bello's autonomous agent. I know his entire research pipeline, resume, and technical stack.<br><br>How can I assist you today?
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

    const initLogic = () => {
        const avatar = document.getElementById('penelope-avatar');
        const chatbox = document.getElementById('penelope-chatbox');
        const closeBtn = document.getElementById('p-close');
        const input = document.getElementById('p-input');
        const sendBtn = document.getElementById('p-send');
        const messages = document.getElementById('p-messages');
        let isOpen = false;

        // Toggle Chat Window
        const toggleChat = () => {
            isOpen = !isOpen;
            if (isOpen) {
                chatbox.classList.add('open');
                avatar.querySelector('i').classList.replace('fa-bolt', 'fa-times');
                avatar.style.background = '#0ea5e9';
                avatar.querySelector('i').style.color = '#fff';
                setTimeout(() => input.focus(), 300);
            } else {
                chatbox.classList.remove('open');
                avatar.querySelector('i').classList.replace('fa-times', 'fa-bolt');
                avatar.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
                avatar.querySelector('i').style.color = '#0ea5e9';
            }
        };

        avatar.addEventListener('click', toggleChat);
        closeBtn.addEventListener('click', toggleChat);

        // Message Handling
        const appendMessage = (text, sender) => {
            const msg = document.createElement('div');
            msg.className = `p-msg ${sender}`;
            msg.innerHTML = text;
            messages.appendChild(msg);
            messages.scrollTop = messages.scrollHeight;
        };

        const showTyping = () => {
            const typing = document.createElement('div');
            typing.className = `p-msg bot p-typing`;
            typing.id = 'p-typing-indicator';
            typing.innerHTML = `<div class="p-dot"></div><div class="p-dot"></div><div class="p-dot"></div>`;
            messages.appendChild(typing);
            messages.scrollTop = messages.scrollHeight;
        };

        const removeTyping = () => {
            const typing = document.getElementById('p-typing-indicator');
            if (typing) typing.remove();
        };

        // Dummy Bot Logic (Phase 1)
        const handleSend = () => {
            const text = input.value.trim();
            if (!text) return;

            appendMessage(text, 'user');
            input.value = '';

            // Simulate AI Thinking
            showTyping();
            
            setTimeout(() => {
                removeTyping();
                
                // Simple keyword triggers for Phase 1 testing
                const lowerText = text.toLowerCase();
                let reply = "I am currently operating in Phase 1 mode. My LLM brain has not been fully connected yet. But I am ready for deployment!";
                
                if (lowerText.includes("resume") || lowerText.includes("cgpa") || lowerText.includes("education")) {
                    reply = "Mohammed is graduating from AFIT Kaduna with a B.Eng in Aerospace Engineering (4.13/5.00 CGPA). In Sept 2026, he begins his M.Sc. in Smart Aviation at Beihang University.";
                } else if (lowerText.includes("project") || lowerText.includes("research")) {
                    reply = "He has 4 papers currently under review, including works on the Dornier 228 Landing Gear, B787 Ignition Digital Twins, and Blockchain Aviation Security. Check the Logbook for details!";
                } else if (lowerText.includes("contact") || lowerText.includes("talk") || lowerText.includes("email") || lowerText.includes("hire")) {
                    reply = "You can reach him directly at <strong>bellosanidrescue@gmail.com</strong>. In Phase 3, I will be able to route your message to him directly from this chat!";
                }

                appendMessage(reply, 'bot');
            }, 1200); // Artificial delay
        };

        sendBtn.addEventListener('click', handleSend);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    };

    // Run initializations
    injectStyles();
    buildDOM();
    initLogic();
    console.log("Penelope Agent v1.2 Initialized.");

})();
