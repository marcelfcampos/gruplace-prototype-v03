function selectSuggestion(text) {
            const input = document.getElementById('search-input');
            input.value = text;
            input.focus();
        }

        function handleSearch(event) {
            event.preventDefault();
            const input = document.getElementById('search-input');
            const query = input.value.trim();
            if (!query) return;

            const chatResults = document.getElementById('chat-results');
            chatResults.classList.remove('hidden');

            // Add user message
            const userMsgHTML = `
                <div class="chat-message chat-message--user">
                    <div class="chat-bubble chat-bubble--user">
                        ${escapeHTML(query)}
                    </div>
                </div>
            `;
            chatResults.insertAdjacentHTML('beforeend', userMsgHTML);
            input.value = '';

            // Scroll main content down
            const mainContent = document.getElementById('main-content');
            mainContent.scrollTop = mainContent.scrollHeight;

            // Simulate AI response after 1 second
            setTimeout(() => {
                const aiResponseHTML = `
                    <div class="chat-message chat-message--bot">
                        <div class="chat-avatar">
                            <i class="fa-solid fa-robot chat-avatar-icon"></i>
                        </div>
                        <div class="chat-bubble chat-bubble--bot">
                            Encontrei ótimas opções para <strong>"${escapeHTML(query)}"</strong>! Aqui estão os produtos mais recomendados com base nas avaliações dos clientes.
                        </div>
                    </div>
                `;
                chatResults.insertAdjacentHTML('beforeend', aiResponseHTML);
                mainContent.scrollTop = mainContent.scrollHeight;
            }, 1000);
        }

        function escapeHTML(str) {
            return str.replace(/[&<>'"]/g,
                tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
            );
        }
