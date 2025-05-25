// Data gambar
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    title: "Pemandangan Gunung",
    category: "nature",
    likes: 24,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    title: "Arsitektur Kota",
    category: "city",
    likes: 18,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    title: "Jalan Hutan",
    category: "nature",
    likes: 32,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    title: "Ombak Laut",
    category: "nature",
    likes: 45,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=600&fit=crop",
    title: "Lampu Kota Malam",
    category: "city",
    likes: 29,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
    title: "Sunset Gurun",
    category: "nature",
    likes: 37,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    title: "Geometri Modern",
    category: "abstract",
    likes: 21,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&h=600&fit=crop",
    title: "Pantai Tropis",
    category: "nature",
    likes: 52,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
    title: "Jalan Kota",
    category: "city",
    likes: 16,
  },
];

let currentFilter = "all";
let currentImageIndex = 0;
let filteredImages = [...images];
let likedImages = new Set();

// Render galeri
function renderGallery(imagesToShow = images) {
  const gallery = document.getElementById("gallery");
  filteredImages = imagesToShow;

  gallery.innerHTML = imagesToShow
    .map(
      (image, index) => `
                <div class="gallery-item" data-id="${
                  image.id
                }" onclick="openModal(${index})">
                    <img src="${image.src}" alt="${image.title}" loading="lazy">
                    <div class="image-overlay">
                        <div class="image-title">${image.title}</div>
                        <div class="image-category">#${image.category}</div>
                        <div class="image-actions">
                            <button class="action-btn like-btn ${
                              likedImages.has(image.id) ? "liked" : ""
                            }" 
                                    onclick="toggleLike(event, ${image.id})">
                                ❤️ ${
                                  image.likes +
                                  (likedImages.has(image.id) ? 1 : 0)
                                }
                            </button>
                            <button class="action-btn" onclick="shareImage(event, '${
                              image.title
                            }')">
                                📤 Bagikan
                            </button>
                        </div>
                    </div>
                </div>
            `
    )
    .join("");
}

// Filter galeri
function filterGallery(category) {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`[data-filter="${category}"]`).classList.add("active");

  currentFilter = category;
  const filteredImages =
    category === "all"
      ? images
      : images.filter((img) => img.category === category);

  renderGallery(filteredImages);
}

// Toggle like
function toggleLike(event, imageId) {
  event.stopPropagation();
  if (likedImages.has(imageId)) {
    likedImages.delete(imageId);
  } else {
    likedImages.add(imageId);
  }
  renderGallery(filteredImages);
}

// Share image
function shareImage(event, title) {
  event.stopPropagation();
  if (navigator.share) {
    navigator.share({
      title: title,
      text: `Lihat foto indah ini: ${title}`,
      url: window.location.href,
    });
  } else {
    alert(`Berbagi: ${title}`);
  }
}

// Modal functions
function openModal(index) {
  currentImageIndex = index;
  const image = filteredImages[index];

  document.getElementById("modalImg").src = image.src;
  document.getElementById("modalTitle").textContent = image.title;
  document.getElementById(
    "modalCategory"
  ).textContent = `Kategori: ${image.category}`;
  document.getElementById("modal").classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function navigateModal(direction) {
  if (direction === "next") {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
  } else {
    currentImageIndex =
      currentImageIndex === 0
        ? filteredImages.length - 1
        : currentImageIndex - 1;
  }

  const image = filteredImages[currentImageIndex];
  document.getElementById("modalImg").src = image.src;
  document.getElementById("modalTitle").textContent = image.title;
  document.getElementById(
    "modalCategory"
  ).textContent = `Kategori: ${image.category}`;
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  renderGallery();

  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filterGallery(btn.dataset.filter);
    });
  });

  // Modal controls
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document
    .getElementById("prevBtn")
    .addEventListener("click", () => navigateModal("prev"));
  document
    .getElementById("nextBtn")
    .addEventListener("click", () => navigateModal("next"));

  // Close modal on outside click
  document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (document.getElementById("modal").classList.contains("active")) {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigateModal("prev");
      if (e.key === "ArrowRight") navigateModal("next");
    }
  });
});
