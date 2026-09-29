export const profile = {
  name: 'Mariano Ledesma',
  role: 'Desarrollador web full stack',
  email: 'perezledesmamariano@gmail.com',
  whatsapp: '543854932369',
  whatsappMessage: 'Hola Mariano, vi tu portfolio y me gustaría conversar sobre un proyecto.',
  github: 'https://github.com/MarsProm',
  linkedin: 'https://www.linkedin.com/in/mariano-perez-a0408b371/',
  cv: 'https://res.cloudinary.com/dsfehftff/image/upload/f_auto,q_auto/WhatsApp_Image_2026-04-17_at_11.19.24_PM_febsyn',
};

export const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`;
