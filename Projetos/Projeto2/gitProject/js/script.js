// Função para buscar o perfil do GitHub
async function searchProfile() {
    const username = document.getElementById("profileInput").value;
    const profileContainer = document.getElementById("profile");

    if (!username) {
        profileContainer.innerHTML = "<p>Por favor, insira um nome de usuário do GitHub.</p>";
        return;
    }

    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.message === "Not Found") {
            profileContainer.innerHTML = "<p>Perfil não encontrado.</p>";
            return;
        }

        // Exibir as informações do perfil
        displayProfile(data);
    } catch (error) {
        profileContainer.innerHTML = "<p>Erro ao buscar perfil. Tente novamente.</p>";
    }
}

// Função para exibir as informações do perfil
function displayProfile(profile) {
    const profileContainer = document.getElementById("profile");
    
    profileContainer.innerHTML = `
        <div class="profile">
            <img src="${profile.avatar_url}" alt="${profile.login}'s Avatar" class="avatar">
            <h2>${profile.name || profile.login}</h2>
            <p>${profile.bio || "Sem bio disponível."}</p>
            <p><strong>Seguidores:</strong> ${profile.followers}</p>
            <p><strong>Seguindo:</strong> ${profile.following}</p>
            <p><a href="${profile.html_url}" target="_blank">Ver Perfil no GitHub</a></p>
        </div>
    `;
}
