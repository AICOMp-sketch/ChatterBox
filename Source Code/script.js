document.addEventListener('DOMContentLoaded', function() {
            // DOM elements
            const messageInput = document.getElementById('messageInput');
            const sendBtn = document.getElementById('sendBtn');
            const chatMessages = document.getElementById('chatMessages');
            const emojiBtn = document.getElementById('emojiBtn');
            const emojiPicker = document.getElementById('emojiPicker');
            const typingIndicator = document.getElementById('typingIndicator');
            const mobileMenuBtn = document.addEventListener('DOMContentLoaded', function() {
                // DOM elements
                const messageInput = document.getElementById('messageInput');
                const sendBtn = document.getElementById('sendBtn');
                const chatMessages = document.getElementById('chatMessages');
                const emojiBtn = document.getElementById('emojiBtn');
                const emojiPicker = document.getElementById('emojiPicker');
                const typingIndicator = document.getElementById('typingIndicator');
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');
                const sidebar = document.getElementById('sidebar');
                const chatArea = document.getElementById('chatArea');
                const attachmentBtn = document.getElementById('attachmentBtn');
                
                // Sample emojis
                const emojis = ['😀', '😂', '😍', '👍', '👋', '😎', '😊', '🙏', '🔥', '❤️', '🤔', '🎉'];
                
                // Initialize emoji picker
                function initEmojiPicker() {
                    emojiPicker.innerHTML = '';
                    emojis.forEach(emoji => {
                        const btn = document.createElement('button');
                        btn.textContent = emoji;
                        btn.className = 'emoji-picker-btn';
                        btn.style.fontSize = '1.5rem';
                        btn.style.margin = '0.2rem';
                        btn.style.cursor = 'pointer';
                        btn.style.background = 'none';
                        btn.style.border = 'none';
                        btn.addEventListener('click', () => {
                            messageInput.value += emoji;
                            messageInput.focus();
                        });
                        emojiPicker.appendChild(btn);
                    });
                }
                
                // Toggle emoji picker
                emojiBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    emojiPicker.classList.toggle('show');
                });
                
                // Close emoji picker when clicking outside
                document.addEventListener('click', () => {
                    emojiPicker.classList.remove('show');
                });
                
                // Mobile menu toggle
                mobileMenuBtn.addEventListener('click', () => {
                    sidebar.classList.toggle('active');
                    chatArea.classList.toggle('active');
                });
                
                // Handle sending messages
                function sendMessage() {
                    const messageText = messageInput.value.trim();
                    if (messageText) {
                        // Create new message element
                        const messageDiv = document.createElement('div');
                        messageDiv.className = 'message sent';
                        messageDiv.innerHTML = `
                            <div class="message-actions">
                                <button class="message-action-btn">↩️</button>
                                <button class="message-action-btn">🗑️</button>
                            </div>
                            ${messageText}
                            <div class="message-info">
                                <span>You</span>
                                <span class="message-time">${getCurrentTime()}</span>
                            </div>
                        `;
                        chatMessages.appendChild(messageDiv);
                        messageInput.value = '';
                        
                        // Auto scroll to bottom
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                        
                        // Show typing indicator for received message
                        setTimeout(() => {
                            typingIndicator.classList.add('visible');
                            
                            // Simulate received message after delay
                            setTimeout(() => {
                                typingIndicator.classList.remove('visible');
                                receiveMessage();
                            }, 1500);
                        }, 500);
                    }
                }
                
                // Simulate received message
                function receiveMessage() {
                    const responses = [
                        "That's interesting!",
                        "I see what you mean.",
                        "Let me think about that...",
                        "Sounds good to me!",
                        "What else is new with you?",
                        "Have you seen the latest updates?"
                    ];
                    
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    
                    const messageDiv = document.createElement('div');
                    messageDiv.className = 'message received';
                    messageDiv.innerHTML = `
                        <div class="message-actions">
                            <button class="message-action-btn">↩️</button>
                            <button class="message-action-btn">🗑️</button>
                        </div>
                        ${randomResponse}
                        <div class="message-info">
                            <span>John Doe</span>
                            <span class="message-time">${getCurrentTime()}</span>
                        </div>
                    `;
                    chatMessages.appendChild(messageDiv);
                    
                    // Auto scroll to bottom
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }
                
                // Get current time in HH:MM AM/PM format
                function getCurrentTime() {
                    const now = new Date();
                    let hours = now.getHours();
                    const minutes = now.getMinutes().toString().padStart(2, '0');
                    const ampm = hours >= 12 ? 'PM' : 'AM';
                    hours = hours % 12;
                    hours = hours ? hours : 12; // the hour '0' should be '12'
                    return `${hours}:${minutes} ${ampm}`;
                }
                
                // Event listeners
                sendBtn.addEventListener('click', sendMessage);
                
                messageInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        sendMessage();
                    }
                });
                
                // Handle attachment button click
                attachmentBtn.addEventListener('click', () => {
                    // In a real app, this would open a file dialog
                    alert('File attachment feature would be implemented here');
                });
                
                // Initialize the app
                initEmojiPicker();
                
                // Auto-scroll to bottom on load
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Sample contact click handler
                document.querySelectorAll('.user-item').forEach(item => {
                    item.addEventListener('click', function() {
                        document.querySelectorAll('.user-item').forEach(i => i.classList.remove('active'));
                        this.classList.add('active');
                        
                        // Update chat header
                        const userName = this.querySelector('.user-name').textContent;
                        document.querySelector('.chat-header-title h2').textContent = userName;
                        
                        // In a real app, this would load the conversation with this user
                    });
                });
            });