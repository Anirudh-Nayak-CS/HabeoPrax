const quotes = [
    {
        "text": "Stay hungry. Keep pushing.",
        "author": "Steve Jobs"
    },
    {
        "text": "Dream big. Stay humble.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Persevere. Keep pushing.",
        "author": "Walt Disney"
    },
    {
        "text": "Dream big. Conquer your fears.",
        "author": "Maya Angelou"
    },
    {
        "text": "Keep going. Persevere.",
        "author": "Henry Ford"
    },
    {
        "text": "Never give up. Stay humble.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Be fearless. Never give up.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Embrace the journey. Conquer your fears.",
        "author": "Plato"
    },
    {
        "text": "Stay focused. Rise above.",
        "author": "Steve Jobs"
    },
    {
        "text": "Be the change. Stay focused.",
        "author": "Plato"
    },
    {
        "text": "Push your limits. Overcome fear.",
        "author": "Plato"
    },
    {
        "text": "Rise above. Keep pushing.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep pushing. Keep going.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Conquer your fears. Stay strong.",
        "author": "Henry Ford"
    },
    {
        "text": "Overcome fear. Keep pushing.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Keep going. Make it happen.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay strong. Keep pushing.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay hungry. Overcome fear.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Create your own path. Overcome fear.",
        "author": "Bruce Lee"
    },
    {
        "text": "Believe in yourself. Be the light.",
        "author": "Steve Jobs"
    },
    {
        "text": "Success is a mindset. Keep pushing.",
        "author": "Sun Tzu"
    },
    {
        "text": "Push your limits. Take the first step.",
        "author": "Socrates"
    },
    {
        "text": "Keep moving forward. Stay humble.",
        "author": "Maya Angelou"
    },
    {
        "text": "Rise above. Keep moving forward.",
        "author": "Henry Ford"
    },
    {
        "text": "Dream big. Conquer your fears.",
        "author": "Plato"
    },
    {
        "text": "Keep pushing. Keep pushing.",
        "author": "Walt Disney"
    },
    {
        "text": "You can do it. Make it happen.",
        "author": "Sun Tzu"
    },
    {
        "text": "Push your limits. Make it happen.",
        "author": "Steve Jobs"
    },
    {
        "text": "Never give up. Stay positive.",
        "author": "Confucius"
    },
    {
        "text": "Stay humble. Overcome fear.",
        "author": "Maya Angelou"
    },
    {
        "text": "Persevere. Keep moving forward.",
        "author": "Aristotle"
    },
    {
        "text": "Overcome fear. Never give up.",
        "author": "Mark Twain"
    },
    {
        "text": "Dream big. Conquer your fears.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Keep going. Stay resilient.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep going. Be fearless.",
        "author": "Laozi"
    },
    {
        "text": "Be fearless. Keep pushing.",
        "author": "Maya Angelou"
    },
    {
        "text": "Keep pushing. You can do it.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Create your own path. Keep pushing.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay positive. Be the light.",
        "author": "Henry Ford"
    },
    {
        "text": "Be fearless. Turn pain into power.",
        "author": "Mark Twain"
    },
    {
        "text": "Success is a mindset. Never give up.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay determined. Create your own path.",
        "author": "Plato"
    },
    {
        "text": "Keep pushing. Work hard in silence.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay positive. Work hard in silence.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be the change. Turn pain into power.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Keep pushing. Overcome fear.",
        "author": "Sun Tzu"
    },
    {
        "text": "Take the first step. Keep going.",
        "author": "Aristotle"
    },
    {
        "text": "Believe in yourself. Make it happen.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay humble. You can do it.",
        "author": "Isaac Newton"
    },
    {
        "text": "You can do it. Stay hungry.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Trust the process. Be fearless.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay resilient. Stay determined.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Keep pushing. Keep moving forward.",
        "author": "Sun Tzu"
    },
    {
        "text": "Rise above. Take the first step.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay resilient. Never give up.",
        "author": "Marie Curie"
    },
    {
        "text": "Dream big. Be fearless.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay positive. Work hard in silence.",
        "author": "Maya Angelou"
    },
    {
        "text": "Never give up. Stay humble.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay positive. Work hard in silence.",
        "author": "Sun Tzu"
    },
    {
        "text": "Push your limits. Stay humble.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Make it happen. Stay humble.",
        "author": "Plato"
    },
    {
        "text": "Create your own path. Turn pain into power.",
        "author": "Helen Keller"
    },
    {
        "text": "Be the change. Stay resilient.",
        "author": "Marie Curie"
    },
    {
        "text": "Rise above. Make it happen.",
        "author": "Confucius"
    },
    {
        "text": "Stay hungry. Trust the process.",
        "author": "Marie Curie"
    },
    {
        "text": "Create your own path. Dream big.",
        "author": "Laozi"
    },
    {
        "text": "Create your own path. Be fearless.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay focused. Stay resilient.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Push your limits. Trust the process.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Take the first step. Stay hungry.",
        "author": "Socrates"
    },
    {
        "text": "Stay positive. Work hard in silence.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Work hard in silence. Keep pushing.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay humble. Conquer your fears.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be the light. Stay strong.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Success is a mindset. Turn pain into power.",
        "author": "Helen Keller"
    },
    {
        "text": "Make it happen. Stay hungry.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay hungry. Work hard in silence.",
        "author": "Walt Disney"
    },
    {
        "text": "Be the light. Be the light.",
        "author": "Walt Disney"
    },
    {
        "text": "Push your limits. Stay hungry.",
        "author": "Albert Einstein"
    },
    {
        "text": "Create your own path. Stay humble.",
        "author": "Socrates"
    },
    {
        "text": "Be fearless. Work hard in silence.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay hungry. Take the first step.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay humble. Keep going.",
        "author": "Sun Tzu"
    },
    {
        "text": "Keep pushing. Turn pain into power.",
        "author": "Laozi"
    },
    {
        "text": "Stay determined. Success is a mindset.",
        "author": "Steve Jobs"
    },
    {
        "text": "Be the change. Stay hungry.",
        "author": "Plato"
    },
    {
        "text": "Create your own path. Be fearless.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay strong. Be the light.",
        "author": "Helen Keller"
    },
    {
        "text": "Turn pain into power. Be the light.",
        "author": "Maya Angelou"
    },
    {
        "text": "Turn pain into power. Keep moving forward.",
        "author": "Socrates"
    },
    {
        "text": "Never give up. Believe in yourself.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay positive. Be the change.",
        "author": "Isaac Newton"
    },
    {
        "text": "Keep going. Believe in yourself.",
        "author": "Socrates"
    },
    {
        "text": "You can do it. Conquer your fears.",
        "author": "Mark Twain"
    },
    {
        "text": "Work hard in silence. Stay strong.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep going. Stay humble.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay strong. Keep going.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay focused. Stay humble.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep pushing. Stay determined.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay resilient. Keep moving forward.",
        "author": "Helen Keller"
    },
    {
        "text": "Make it happen. Success is a mindset.",
        "author": "Socrates"
    },
    {
        "text": "Rise above. Dream big.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be fearless. Create your own path.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay focused. Be the light.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay focused. You can do it.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Be fearless. Trust the process.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be fearless. Keep pushing.",
        "author": "Maya Angelou"
    },
    {
        "text": "Believe in yourself. Make it happen.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep pushing. Stay focused.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay focused. Stay humble.",
        "author": "Plato"
    },
    {
        "text": "Trust the process. Stay positive.",
        "author": "Maya Angelou"
    },
    {
        "text": "Embrace the journey. Conquer your fears.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Believe in yourself. Be the change.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep moving forward. Stay determined.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Make it happen. Never give up.",
        "author": "Marie Curie"
    },
    {
        "text": "Be fearless. Turn pain into power.",
        "author": "Helen Keller"
    },
    {
        "text": "Success is a mindset. Stay determined.",
        "author": "Plato"
    },
    {
        "text": "Dream big. Make it happen.",
        "author": "Walt Disney"
    },
    {
        "text": "Turn pain into power. Create your own path.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay determined. Conquer your fears.",
        "author": "Laozi"
    },
    {
        "text": "Keep pushing. Be the change.",
        "author": "Maya Angelou"
    },
    {
        "text": "Keep moving forward. Dream big.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay determined. Stay determined.",
        "author": "Aristotle"
    },
    {
        "text": "Stay positive. Persevere.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Conquer your fears. Rise above.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Keep going. Keep going.",
        "author": "Isaac Newton"
    },
    {
        "text": "Make it happen. You can do it.",
        "author": "Aristotle"
    },
    {
        "text": "Overcome fear. Keep pushing.",
        "author": "Socrates"
    },
    {
        "text": "Keep pushing. Stay strong.",
        "author": "Helen Keller"
    },
    {
        "text": "Never give up. Believe in yourself.",
        "author": "Laozi"
    },
    {
        "text": "Stay positive. Push your limits.",
        "author": "Laozi"
    },
    {
        "text": "Stay determined. Stay positive.",
        "author": "Aristotle"
    },
    {
        "text": "Conquer your fears. Stay focused.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay determined. Create your own path.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Keep pushing. Stay hungry.",
        "author": "Winston Churchill"
    },
    {
        "text": "Keep pushing. Trust the process.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Believe in yourself. Turn pain into power.",
        "author": "Sun Tzu"
    },
    {
        "text": "Overcome fear. Embrace the journey.",
        "author": "Socrates"
    },
    {
        "text": "Stay humble. Trust the process.",
        "author": "Sun Tzu"
    },
    {
        "text": "Believe in yourself. Stay resilient.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Make it happen. Stay humble.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay focused. Turn pain into power.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay positive. You can do it.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay strong. Keep pushing.",
        "author": "Bruce Lee"
    },
    {
        "text": "Make it happen. Stay strong.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Overcome fear. Take the first step.",
        "author": "Sun Tzu"
    },
    {
        "text": "Work hard in silence. Dream big.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Embrace the journey. Conquer your fears.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay focused. Make it happen.",
        "author": "Laozi"
    },
    {
        "text": "Persevere. Work hard in silence.",
        "author": "Maya Angelou"
    },
    {
        "text": "Persevere. Keep going.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay hungry. Embrace the journey.",
        "author": "Walt Disney"
    },
    {
        "text": "Keep going. Stay hungry.",
        "author": "Plato"
    },
    {
        "text": "Take the first step. Stay humble.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Conquer your fears. Be fearless.",
        "author": "Plato"
    },
    {
        "text": "Stay strong. Rise above.",
        "author": "Walt Disney"
    },
    {
        "text": "You can do it. Trust the process.",
        "author": "Steve Jobs"
    },
    {
        "text": "Embrace the journey. Trust the process.",
        "author": "Mark Twain"
    },
    {
        "text": "Be the light. Stay determined.",
        "author": "Winston Churchill"
    },
    {
        "text": "Dream big. Stay positive.",
        "author": "Confucius"
    },
    {
        "text": "Keep going. Stay positive.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay focused. Stay hungry.",
        "author": "Steve Jobs"
    },
    {
        "text": "Persevere. Make it happen.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay strong. Stay strong.",
        "author": "Laozi"
    },
    {
        "text": "Stay humble. Trust the process.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Make it happen. You can do it.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Keep moving forward. Stay resilient.",
        "author": "Maya Angelou"
    },
    {
        "text": "Keep going. Make it happen.",
        "author": "Albert Einstein"
    },
    {
        "text": "You can do it. Stay strong.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay focused. Stay determined.",
        "author": "Maya Angelou"
    },
    {
        "text": "Dream big. Stay hungry.",
        "author": "Laozi"
    },
    {
        "text": "Stay focused. Turn pain into power.",
        "author": "Albert Einstein"
    },
    {
        "text": "Conquer your fears. Overcome fear.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Dream big. Trust the process.",
        "author": "Winston Churchill"
    },
    {
        "text": "Overcome fear. Stay positive.",
        "author": "Mark Twain"
    },
    {
        "text": "Persevere. Take the first step.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay determined. Persevere.",
        "author": "Henry Ford"
    },
    {
        "text": "Never give up. Trust the process.",
        "author": "Aristotle"
    },
    {
        "text": "Push your limits. Stay resilient.",
        "author": "Helen Keller"
    },
    {
        "text": "Believe in yourself. Dream big.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay positive. Work hard in silence.",
        "author": "Plato"
    },
    {
        "text": "Embrace the journey. Turn pain into power.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay focused. Keep going.",
        "author": "Bruce Lee"
    },
    {
        "text": "Keep going. Take the first step.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay determined. Trust the process.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Trust the process. Stay humble.",
        "author": "Steve Jobs"
    },
    {
        "text": "Persevere. Believe in yourself.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay humble. Trust the process.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay hungry. Make it happen.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Embrace the journey. Stay focused.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Keep pushing. Overcome fear.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Be the light. Push your limits.",
        "author": "Walt Disney"
    },
    {
        "text": "Never give up. Overcome fear.",
        "author": "Plato"
    },
    {
        "text": "Be fearless. Push your limits.",
        "author": "Socrates"
    },
    {
        "text": "Conquer your fears. Dream big.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Dream big. Never give up.",
        "author": "Henry Ford"
    },
    {
        "text": "Be the change. Trust the process.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay humble. Conquer your fears.",
        "author": "Plato"
    },
    {
        "text": "Keep going. Stay determined.",
        "author": "Maya Angelou"
    },
    {
        "text": "Work hard in silence. Trust the process.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Make it happen. Stay hungry.",
        "author": "Aristotle"
    },
    {
        "text": "Stay hungry. Turn pain into power.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay strong. Be fearless.",
        "author": "Winston Churchill"
    },
    {
        "text": "Rise above. Never give up.",
        "author": "Confucius"
    },
    {
        "text": "Stay positive. Dream big.",
        "author": "Walt Disney"
    },
    {
        "text": "Rise above. Take the first step.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Dream big. Make it happen.",
        "author": "Mark Twain"
    },
    {
        "text": "You can do it. Push your limits.",
        "author": "Walt Disney"
    },
    {
        "text": "Push your limits. Turn pain into power.",
        "author": "Maya Angelou"
    },
    {
        "text": "Be fearless. Embrace the journey.",
        "author": "Aristotle"
    },
    {
        "text": "Conquer your fears. Take the first step.",
        "author": "Aristotle"
    },
    {
        "text": "Take the first step. Believe in yourself.",
        "author": "Maya Angelou"
    },
    {
        "text": "Create your own path. Keep moving forward.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Keep moving forward. Stay determined.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay strong. Overcome fear.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Believe in yourself. Make it happen.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Create your own path. Stay strong.",
        "author": "Steve Jobs"
    },
    {
        "text": "Never give up. Stay resilient.",
        "author": "Aristotle"
    },
    {
        "text": "You can do it. Turn pain into power.",
        "author": "Confucius"
    },
    {
        "text": "Dream big. Be the light.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Dream big. Conquer your fears.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay determined. Believe in yourself.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay resilient. Keep pushing.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Keep moving forward. Keep going.",
        "author": "Marie Curie"
    },
    {
        "text": "Persevere. Stay focused.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay hungry. Take the first step.",
        "author": "Steve Jobs"
    },
    {
        "text": "Conquer your fears. Push your limits.",
        "author": "Confucius"
    },
    {
        "text": "Dream big. Stay determined.",
        "author": "Sun Tzu"
    },
    {
        "text": "Believe in yourself. Trust the process.",
        "author": "Albert Einstein"
    },
    {
        "text": "Be fearless. Keep moving forward.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay hungry. Create your own path.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Take the first step. Rise above.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Create your own path. Keep going.",
        "author": "Walt Disney"
    },
    {
        "text": "Keep pushing. Keep moving forward.",
        "author": "Albert Einstein"
    },
    {
        "text": "Keep moving forward. Push your limits.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Embrace the journey. Push your limits.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Push your limits. Conquer your fears.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Work hard in silence. Stay determined.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be the light. Stay focused.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Success is a mindset. Embrace the journey.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay positive. Rise above.",
        "author": "Laozi"
    },
    {
        "text": "Success is a mindset. Keep going.",
        "author": "Mark Twain"
    },
    {
        "text": "Keep pushing. Stay determined.",
        "author": "Isaac Newton"
    },
    {
        "text": "Push your limits. Conquer your fears.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay focused. Keep going.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Success is a mindset. Stay focused.",
        "author": "Marie Curie"
    },
    {
        "text": "Believe in yourself. Create your own path.",
        "author": "Albert Einstein"
    },
    {
        "text": "Push your limits. Stay hungry.",
        "author": "Plato"
    },
    {
        "text": "Stay resilient. Create your own path.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Turn pain into power. Dream big.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay focused. Stay strong.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the light. Overcome fear.",
        "author": "Walt Disney"
    },
    {
        "text": "Turn pain into power. Dream big.",
        "author": "Laozi"
    },
    {
        "text": "Believe in yourself. Be the light.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Take the first step. Stay hungry.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay positive. Be the light.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Overcome fear. Push your limits.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay focused. Work hard in silence.",
        "author": "Mark Twain"
    },
    {
        "text": "Success is a mindset. Rise above.",
        "author": "Plato"
    },
    {
        "text": "Conquer your fears. Work hard in silence.",
        "author": "Steve Jobs"
    },
    {
        "text": "Trust the process. Keep going.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay hungry. Stay hungry.",
        "author": "Henry Ford"
    },
    {
        "text": "Turn pain into power. Overcome fear.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay determined. Be the light.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Be the change. Rise above.",
        "author": "Helen Keller"
    },
    {
        "text": "Work hard in silence. Stay resilient.",
        "author": "Socrates"
    },
    {
        "text": "Stay positive. Take the first step.",
        "author": "Sun Tzu"
    },
    {
        "text": "You can do it. Stay resilient.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Trust the process. Keep pushing.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Make it happen. Turn pain into power.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Persevere. You can do it.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay humble. Be the light.",
        "author": "Laozi"
    },
    {
        "text": "Work hard in silence. Stay positive.",
        "author": "Marie Curie"
    },
    {
        "text": "Be the change. Turn pain into power.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Dream big. Turn pain into power.",
        "author": "Steve Jobs"
    },
    {
        "text": "Be fearless. Never give up.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay hungry. Believe in yourself.",
        "author": "Confucius"
    },
    {
        "text": "Keep pushing. Keep moving forward.",
        "author": "Maya Angelou"
    },
    {
        "text": "Embrace the journey. Overcome fear.",
        "author": "Marie Curie"
    },
    {
        "text": "Keep moving forward. Take the first step.",
        "author": "Maya Angelou"
    },
    {
        "text": "Make it happen. Be the change.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay hungry. Push your limits.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Persevere. You can do it.",
        "author": "Bruce Lee"
    },
    {
        "text": "Keep going. Be the light.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay hungry. Turn pain into power.",
        "author": "Maya Angelou"
    },
    {
        "text": "Create your own path. Make it happen.",
        "author": "Marie Curie"
    },
    {
        "text": "Conquer your fears. Persevere.",
        "author": "Winston Churchill"
    },
    {
        "text": "Be the change. Keep moving forward.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Keep going. Believe in yourself.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep moving forward. Trust the process.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay strong. Keep pushing.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Push your limits. Stay strong.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be fearless. Make it happen.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay resilient. Stay humble.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Create your own path. Stay humble.",
        "author": "Plato"
    },
    {
        "text": "Dream big. Dream big.",
        "author": "Aristotle"
    },
    {
        "text": "Keep going. Conquer your fears.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Rise above. Trust the process.",
        "author": "Aristotle"
    },
    {
        "text": "Work hard in silence. Keep pushing.",
        "author": "Socrates"
    },
    {
        "text": "Overcome fear. Stay humble.",
        "author": "Winston Churchill"
    },
    {
        "text": "Make it happen. Make it happen.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be fearless. Conquer your fears.",
        "author": "Mark Twain"
    },
    {
        "text": "Trust the process. Take the first step.",
        "author": "Laozi"
    },
    {
        "text": "Stay strong. Keep going.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be fearless. Stay humble.",
        "author": "Plato"
    },
    {
        "text": "Create your own path. Conquer your fears.",
        "author": "Aristotle"
    },
    {
        "text": "Believe in yourself. You can do it.",
        "author": "Aristotle"
    },
    {
        "text": "Overcome fear. Work hard in silence.",
        "author": "Sun Tzu"
    },
    {
        "text": "Turn pain into power. Overcome fear.",
        "author": "Helen Keller"
    },
    {
        "text": "Believe in yourself. Never give up.",
        "author": "Helen Keller"
    },
    {
        "text": "Conquer your fears. Make it happen.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Keep going. Persevere.",
        "author": "Henry Ford"
    },
    {
        "text": "Be the change. Stay focused.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Create your own path. Push your limits.",
        "author": "Plato"
    },
    {
        "text": "Believe in yourself. Push your limits.",
        "author": "Plato"
    },
    {
        "text": "Keep going. Be the change.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be fearless. Make it happen.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Create your own path. Create your own path.",
        "author": "Helen Keller"
    },
    {
        "text": "Conquer your fears. Be the change.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Take the first step. Push your limits.",
        "author": "Marie Curie"
    },
    {
        "text": "Push your limits. Stay focused.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay positive. Be the light.",
        "author": "Laozi"
    },
    {
        "text": "Stay strong. Stay hungry.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Overcome fear. Conquer your fears.",
        "author": "Winston Churchill"
    },
    {
        "text": "Persevere. Success is a mindset.",
        "author": "Plato"
    },
    {
        "text": "Stay focused. Stay hungry.",
        "author": "Socrates"
    },
    {
        "text": "Stay determined. Create your own path.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep pushing. Take the first step.",
        "author": "Isaac Newton"
    },
    {
        "text": "Keep going. Keep pushing.",
        "author": "Socrates"
    },
    {
        "text": "Work hard in silence. Be the light.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay focused. Keep moving forward.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Trust the process. Be the change.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Work hard in silence. Embrace the journey.",
        "author": "Albert Einstein"
    },
    {
        "text": "Overcome fear. Trust the process.",
        "author": "Winston Churchill"
    },
    {
        "text": "Embrace the journey. Overcome fear.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Overcome fear. Be fearless.",
        "author": "Maya Angelou"
    },
    {
        "text": "You can do it. Dream big.",
        "author": "Sun Tzu"
    },
    {
        "text": "Embrace the journey. Conquer your fears.",
        "author": "Maya Angelou"
    },
    {
        "text": "Overcome fear. Stay determined.",
        "author": "Henry Ford"
    },
    {
        "text": "Overcome fear. Persevere.",
        "author": "Walt Disney"
    },
    {
        "text": "Turn pain into power. Stay determined.",
        "author": "Henry Ford"
    },
    {
        "text": "Believe in yourself. Make it happen.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Conquer your fears. Stay resilient.",
        "author": "Maya Angelou"
    },
    {
        "text": "Keep going. Take the first step.",
        "author": "Mark Twain"
    },
    {
        "text": "Turn pain into power. Stay focused.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Make it happen. Overcome fear.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Rise above. Conquer your fears.",
        "author": "Aristotle"
    },
    {
        "text": "Push your limits. Take the first step.",
        "author": "Winston Churchill"
    },
    {
        "text": "Make it happen. Stay strong.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Believe in yourself. Push your limits.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Create your own path. Believe in yourself.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Be the change. Create your own path.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Embrace the journey. Create your own path.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay resilient. Keep pushing.",
        "author": "Helen Keller"
    },
    {
        "text": "Embrace the journey. You can do it.",
        "author": "Laozi"
    },
    {
        "text": "Stay focused. Never give up.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Persevere. Stay resilient.",
        "author": "Henry Ford"
    },
    {
        "text": "Never give up. Be the change.",
        "author": "Mark Twain"
    },
    {
        "text": "Be fearless. You can do it.",
        "author": "Confucius"
    },
    {
        "text": "Rise above. Turn pain into power.",
        "author": "Maya Angelou"
    },
    {
        "text": "Conquer your fears. Stay positive.",
        "author": "Bruce Lee"
    },
    {
        "text": "Keep going. Stay positive.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay determined. Keep pushing.",
        "author": "Mark Twain"
    },
    {
        "text": "Keep moving forward. Take the first step.",
        "author": "Laozi"
    },
    {
        "text": "Trust the process. Stay focused.",
        "author": "Isaac Newton"
    },
    {
        "text": "Take the first step. Embrace the journey.",
        "author": "Helen Keller"
    },
    {
        "text": "Be the change. Dream big.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Overcome fear. Take the first step.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Success is a mindset. Never give up.",
        "author": "Bruce Lee"
    },
    {
        "text": "Embrace the journey. Be the change.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay humble. Persevere.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep moving forward. Success is a mindset.",
        "author": "Marie Curie"
    },
    {
        "text": "Keep going. Conquer your fears.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Overcome fear. Make it happen.",
        "author": "Laozi"
    },
    {
        "text": "Overcome fear. Overcome fear.",
        "author": "Helen Keller"
    },
    {
        "text": "Keep pushing. Create your own path.",
        "author": "Laozi"
    },
    {
        "text": "Success is a mindset. Keep going.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Never give up. Stay determined.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Create your own path. Keep going.",
        "author": "Mark Twain"
    },
    {
        "text": "Embrace the journey. Keep moving forward.",
        "author": "Mark Twain"
    },
    {
        "text": "Keep going. Rise above.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay determined. Rise above.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Embrace the journey. Stay strong.",
        "author": "Mark Twain"
    },
    {
        "text": "Turn pain into power. Embrace the journey.",
        "author": "Confucius"
    },
    {
        "text": "Keep pushing. Stay focused.",
        "author": "Socrates"
    },
    {
        "text": "Be fearless. Be fearless.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay resilient. Stay strong.",
        "author": "Marie Curie"
    },
    {
        "text": "Be the light. Work hard in silence.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay determined. Stay humble.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay determined. Make it happen.",
        "author": "Bruce Lee"
    },
    {
        "text": "Rise above. Keep going.",
        "author": "Plato"
    },
    {
        "text": "Stay strong. Rise above.",
        "author": "Walt Disney"
    },
    {
        "text": "Never give up. Stay humble.",
        "author": "Isaac Newton"
    },
    {
        "text": "Make it happen. Turn pain into power.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay determined. Success is a mindset.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Persevere. Stay humble.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay humble. Take the first step.",
        "author": "Confucius"
    },
    {
        "text": "Stay determined. Take the first step.",
        "author": "Sun Tzu"
    },
    {
        "text": "Never give up. Stay strong.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay humble. Stay resilient.",
        "author": "Winston Churchill"
    },
    {
        "text": "Take the first step. Make it happen.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay positive. Stay focused.",
        "author": "Socrates"
    },
    {
        "text": "Be fearless. Never give up.",
        "author": "Albert Einstein"
    },
    {
        "text": "Overcome fear. Never give up.",
        "author": "Maya Angelou"
    },
    {
        "text": "Success is a mindset. Success is a mindset.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay positive. Success is a mindset.",
        "author": "Steve Jobs"
    },
    {
        "text": "Take the first step. Keep moving forward.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay determined. Be fearless.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Dream big. Keep pushing.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay hungry. Keep moving forward.",
        "author": "Isaac Newton"
    },
    {
        "text": "Success is a mindset. Overcome fear.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Never give up. Keep going.",
        "author": "Laozi"
    },
    {
        "text": "Be the change. Never give up.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Keep moving forward. Take the first step.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Embrace the journey. You can do it.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay humble. Never give up.",
        "author": "Laozi"
    },
    {
        "text": "Take the first step. Take the first step.",
        "author": "Laozi"
    },
    {
        "text": "Stay hungry. Conquer your fears.",
        "author": "Winston Churchill"
    },
    {
        "text": "Trust the process. Embrace the journey.",
        "author": "Socrates"
    },
    {
        "text": "Stay focused. Create your own path.",
        "author": "Laozi"
    },
    {
        "text": "Stay strong. You can do it.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay strong. Stay strong.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Be fearless. Persevere.",
        "author": "Plato"
    },
    {
        "text": "Keep going. Stay hungry.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay resilient. Stay positive.",
        "author": "Mark Twain"
    },
    {
        "text": "Persevere. Push your limits.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Believe in yourself. Stay hungry.",
        "author": "Isaac Newton"
    },
    {
        "text": "Make it happen. Be the change.",
        "author": "Helen Keller"
    },
    {
        "text": "Dream big. Take the first step.",
        "author": "Socrates"
    },
    {
        "text": "Keep moving forward. Stay determined.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay resilient. Keep pushing.",
        "author": "Isaac Newton"
    },
    {
        "text": "Persevere. Work hard in silence.",
        "author": "Aristotle"
    },
    {
        "text": "Persevere. Create your own path.",
        "author": "Plato"
    },
    {
        "text": "Stay positive. Keep going.",
        "author": "Henry Ford"
    },
    {
        "text": "Embrace the journey. Persevere.",
        "author": "Isaac Newton"
    },
    {
        "text": "Be the change. Overcome fear.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Take the first step. Stay humble.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay resilient. Keep pushing.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Create your own path. Never give up.",
        "author": "Maya Angelou"
    },
    {
        "text": "Take the first step. Keep pushing.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay focused. Trust the process.",
        "author": "Plato"
    },
    {
        "text": "Create your own path. Be fearless.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Conquer your fears. Stay focused.",
        "author": "Henry Ford"
    },
    {
        "text": "Create your own path. Stay resilient.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay focused. Stay resilient.",
        "author": "Henry Ford"
    },
    {
        "text": "Rise above. Conquer your fears.",
        "author": "Socrates"
    },
    {
        "text": "Conquer your fears. Stay strong.",
        "author": "Henry Ford"
    },
    {
        "text": "Be the light. Create your own path.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay focused. Conquer your fears.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Trust the process. Push your limits.",
        "author": "Socrates"
    },
    {
        "text": "Create your own path. Dream big.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Dream big. Take the first step.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay hungry. Keep pushing.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay determined. Stay humble.",
        "author": "Maya Angelou"
    },
    {
        "text": "Turn pain into power. Keep moving forward.",
        "author": "Isaac Newton"
    },
    {
        "text": "Success is a mindset. Conquer your fears.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Be the light. Turn pain into power.",
        "author": "Marie Curie"
    },
    {
        "text": "Keep going. Keep moving forward.",
        "author": "Winston Churchill"
    },
    {
        "text": "Create your own path. Push your limits.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay positive. Be fearless.",
        "author": "Walt Disney"
    },
    {
        "text": "Keep moving forward. Never give up.",
        "author": "Confucius"
    },
    {
        "text": "Dream big. Dream big.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay strong. Keep going.",
        "author": "Bruce Lee"
    },
    {
        "text": "Be the change. Never give up.",
        "author": "Sun Tzu"
    },
    {
        "text": "Push your limits. Push your limits.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay focused. Dream big.",
        "author": "Confucius"
    },
    {
        "text": "Success is a mindset. Believe in yourself.",
        "author": "Socrates"
    },
    {
        "text": "Success is a mindset. Conquer your fears.",
        "author": "Aristotle"
    },
    {
        "text": "Stay determined. Overcome fear.",
        "author": "Winston Churchill"
    },
    {
        "text": "Never give up. Success is a mindset.",
        "author": "Maya Angelou"
    },
    {
        "text": "Turn pain into power. Keep going.",
        "author": "Plato"
    },
    {
        "text": "Create your own path. Keep pushing.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay humble. Dream big.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be the change. Embrace the journey.",
        "author": "Sun Tzu"
    },
    {
        "text": "Never give up. Stay humble.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Believe in yourself. Embrace the journey.",
        "author": "Steve Jobs"
    },
    {
        "text": "You can do it. Trust the process.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Keep moving forward. Never give up.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Keep pushing. Never give up.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep pushing. Take the first step.",
        "author": "Henry Ford"
    },
    {
        "text": "Work hard in silence. Stay humble.",
        "author": "Albert Einstein"
    },
    {
        "text": "Work hard in silence. Take the first step.",
        "author": "Maya Angelou"
    },
    {
        "text": "Be the change. Be fearless.",
        "author": "Sun Tzu"
    },
    {
        "text": "Push your limits. Work hard in silence.",
        "author": "Aristotle"
    },
    {
        "text": "Overcome fear. Persevere.",
        "author": "Helen Keller"
    },
    {
        "text": "Create your own path. Keep going.",
        "author": "Bruce Lee"
    },
    {
        "text": "Be fearless. You can do it.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay positive. Trust the process.",
        "author": "Laozi"
    },
    {
        "text": "Stay strong. You can do it.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Trust the process. Stay determined.",
        "author": "Sun Tzu"
    },
    {
        "text": "Work hard in silence. Be the light.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep going. Stay resilient.",
        "author": "Maya Angelou"
    },
    {
        "text": "Conquer your fears. Embrace the journey.",
        "author": "Helen Keller"
    },
    {
        "text": "Believe in yourself. Success is a mindset.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Keep moving forward. You can do it.",
        "author": "Helen Keller"
    },
    {
        "text": "Success is a mindset. Embrace the journey.",
        "author": "Marie Curie"
    },
    {
        "text": "Push your limits. Make it happen.",
        "author": "Sun Tzu"
    },
    {
        "text": "Success is a mindset. Make it happen.",
        "author": "Walt Disney"
    },
    {
        "text": "Be fearless. Make it happen.",
        "author": "Walt Disney"
    },
    {
        "text": "Trust the process. Push your limits.",
        "author": "Albert Einstein"
    },
    {
        "text": "Keep moving forward. Stay strong.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Take the first step. Conquer your fears.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Be the change. Stay determined.",
        "author": "Helen Keller"
    },
    {
        "text": "Rise above. Be the change.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay positive. Make it happen.",
        "author": "Marie Curie"
    },
    {
        "text": "Be the light. Take the first step.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the light. Be the light.",
        "author": "Plato"
    },
    {
        "text": "Be the light. Persevere.",
        "author": "Winston Churchill"
    },
    {
        "text": "Believe in yourself. Persevere.",
        "author": "Maya Angelou"
    },
    {
        "text": "Never give up. Push your limits.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay humble. Trust the process.",
        "author": "Socrates"
    },
    {
        "text": "Stay hungry. Believe in yourself.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Keep moving forward. Take the first step.",
        "author": "Helen Keller"
    },
    {
        "text": "Work hard in silence. Make it happen.",
        "author": "Walt Disney"
    },
    {
        "text": "Trust the process. Be the light.",
        "author": "Bruce Lee"
    },
    {
        "text": "Never give up. Stay resilient.",
        "author": "Walt Disney"
    },
    {
        "text": "Turn pain into power. Work hard in silence.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Success is a mindset. Push your limits.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Take the first step. Success is a mindset.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Success is a mindset. Create your own path.",
        "author": "Steve Jobs"
    },
    {
        "text": "Make it happen. Work hard in silence.",
        "author": "Aristotle"
    },
    {
        "text": "Stay determined. Keep pushing.",
        "author": "Socrates"
    },
    {
        "text": "Persevere. Be fearless.",
        "author": "Albert Einstein"
    },
    {
        "text": "Persevere. Embrace the journey.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be the light. You can do it.",
        "author": "Steve Jobs"
    },
    {
        "text": "Make it happen. Stay focused.",
        "author": "Maya Angelou"
    },
    {
        "text": "Persevere. Never give up.",
        "author": "Confucius"
    },
    {
        "text": "Be the change. Be the light.",
        "author": "Bruce Lee"
    },
    {
        "text": "Embrace the journey. Rise above.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "You can do it. Success is a mindset.",
        "author": "Helen Keller"
    },
    {
        "text": "Overcome fear. Rise above.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay focused. Dream big.",
        "author": "Henry Ford"
    },
    {
        "text": "Be the light. Believe in yourself.",
        "author": "Helen Keller"
    },
    {
        "text": "Persevere. Turn pain into power.",
        "author": "Bruce Lee"
    },
    {
        "text": "You can do it. Believe in yourself.",
        "author": "Laozi"
    },
    {
        "text": "Stay hungry. Work hard in silence.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "You can do it. Keep pushing.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay determined. Success is a mindset.",
        "author": "Albert Einstein"
    },
    {
        "text": "Work hard in silence. Stay focused.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay strong. Push your limits.",
        "author": "Mark Twain"
    },
    {
        "text": "Work hard in silence. Stay positive.",
        "author": "Winston Churchill"
    },
    {
        "text": "Be fearless. Stay humble.",
        "author": "Plato"
    },
    {
        "text": "Create your own path. Turn pain into power.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay strong. Keep going.",
        "author": "Laozi"
    },
    {
        "text": "Overcome fear. Work hard in silence.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay positive. Take the first step.",
        "author": "Marie Curie"
    },
    {
        "text": "Overcome fear. Never give up.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Take the first step. Persevere.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay resilient. Stay resilient.",
        "author": "Mark Twain"
    },
    {
        "text": "Keep going. You can do it.",
        "author": "Steve Jobs"
    },
    {
        "text": "Trust the process. Take the first step.",
        "author": "Helen Keller"
    },
    {
        "text": "Keep moving forward. Never give up.",
        "author": "Aristotle"
    },
    {
        "text": "Stay strong. Overcome fear.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Make it happen. Stay focused.",
        "author": "Maya Angelou"
    },
    {
        "text": "Keep going. Keep moving forward.",
        "author": "Mark Twain"
    },
    {
        "text": "Take the first step. Overcome fear.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Make it happen. Stay focused.",
        "author": "Aristotle"
    },
    {
        "text": "Make it happen. Success is a mindset.",
        "author": "Sun Tzu"
    },
    {
        "text": "Be the change. Stay focused.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay determined. Stay strong.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay positive. Trust the process.",
        "author": "Helen Keller"
    },
    {
        "text": "Be fearless. Stay positive.",
        "author": "Sun Tzu"
    },
    {
        "text": "Dream big. Be fearless.",
        "author": "Maya Angelou"
    },
    {
        "text": "You can do it. Create your own path.",
        "author": "Helen Keller"
    },
    {
        "text": "Success is a mindset. Stay resilient.",
        "author": "Socrates"
    },
    {
        "text": "Conquer your fears. Persevere.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Keep going. Stay resilient.",
        "author": "Laozi"
    },
    {
        "text": "Never give up. Be the light.",
        "author": "Marie Curie"
    },
    {
        "text": "Keep pushing. Dream big.",
        "author": "Confucius"
    },
    {
        "text": "Rise above. Stay determined.",
        "author": "Confucius"
    },
    {
        "text": "Work hard in silence. Be fearless.",
        "author": "Isaac Newton"
    },
    {
        "text": "Never give up. Never give up.",
        "author": "Henry Ford"
    },
    {
        "text": "Push your limits. Conquer your fears.",
        "author": "Aristotle"
    },
    {
        "text": "Stay focused. Stay focused.",
        "author": "Isaac Newton"
    },
    {
        "text": "Conquer your fears. Take the first step.",
        "author": "Confucius"
    },
    {
        "text": "Push your limits. Turn pain into power.",
        "author": "Henry Ford"
    },
    {
        "text": "Success is a mindset. Stay humble.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay humble. Keep pushing.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay focused. Create your own path.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay positive. Make it happen.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Never give up. Overcome fear.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Turn pain into power. You can do it.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay positive. Stay strong.",
        "author": "Marie Curie"
    },
    {
        "text": "Be the light. You can do it.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay humble. Rise above.",
        "author": "Socrates"
    },
    {
        "text": "Be the change. Conquer your fears.",
        "author": "Socrates"
    },
    {
        "text": "Be the light. Stay strong.",
        "author": "Aristotle"
    },
    {
        "text": "Make it happen. Never give up.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay resilient. Stay resilient.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Overcome fear. Stay positive.",
        "author": "Marie Curie"
    },
    {
        "text": "Work hard in silence. Success is a mindset.",
        "author": "Maya Angelou"
    },
    {
        "text": "Take the first step. Conquer your fears.",
        "author": "Laozi"
    },
    {
        "text": "Be fearless. Stay focused.",
        "author": "Winston Churchill"
    },
    {
        "text": "Be the light. Stay determined.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay positive. Work hard in silence.",
        "author": "Laozi"
    },
    {
        "text": "Push your limits. Make it happen.",
        "author": "Confucius"
    },
    {
        "text": "Work hard in silence. Stay hungry.",
        "author": "Marie Curie"
    },
    {
        "text": "Overcome fear. Stay strong.",
        "author": "Steve Jobs"
    },
    {
        "text": "Take the first step. Persevere.",
        "author": "Aristotle"
    },
    {
        "text": "Success is a mindset. Turn pain into power.",
        "author": "Maya Angelou"
    },
    {
        "text": "Trust the process. Be the change.",
        "author": "Walt Disney"
    },
    {
        "text": "Push your limits. You can do it.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Keep going. Stay strong.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay positive. You can do it.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay focused. Embrace the journey.",
        "author": "Helen Keller"
    },
    {
        "text": "Rise above. Stay focused.",
        "author": "Aristotle"
    },
    {
        "text": "Overcome fear. Be fearless.",
        "author": "Helen Keller"
    },
    {
        "text": "Take the first step. Keep going.",
        "author": "Walt Disney"
    },
    {
        "text": "Success is a mindset. Push your limits.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Conquer your fears. Be the light.",
        "author": "Sun Tzu"
    },
    {
        "text": "Keep pushing. Keep going.",
        "author": "Plato"
    },
    {
        "text": "Success is a mindset. Stay positive.",
        "author": "Sun Tzu"
    },
    {
        "text": "Be the light. Rise above.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay focused. Dream big.",
        "author": "Plato"
    },
    {
        "text": "Stay humble. Stay humble.",
        "author": "Confucius"
    },
    {
        "text": "Success is a mindset. Believe in yourself.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Dream big. Rise above.",
        "author": "Steve Jobs"
    },
    {
        "text": "Be the change. Be fearless.",
        "author": "Winston Churchill"
    },
    {
        "text": "Never give up. Work hard in silence.",
        "author": "Bruce Lee"
    },
    {
        "text": "Take the first step. Keep going.",
        "author": "Socrates"
    },
    {
        "text": "Keep pushing. Make it happen.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay strong. Persevere.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Keep moving forward. You can do it.",
        "author": "Albert Einstein"
    },
    {
        "text": "Persevere. Push your limits.",
        "author": "Confucius"
    },
    {
        "text": "Stay positive. Turn pain into power.",
        "author": "Henry Ford"
    },
    {
        "text": "Embrace the journey. Believe in yourself.",
        "author": "Laozi"
    },
    {
        "text": "Embrace the journey. Embrace the journey.",
        "author": "Walt Disney"
    },
    {
        "text": "Take the first step. Success is a mindset.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Believe in yourself. Take the first step.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Believe in yourself. Stay focused.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay focused. Stay focused.",
        "author": "Helen Keller"
    },
    {
        "text": "You can do it. Take the first step.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay positive. Create your own path.",
        "author": "Plato"
    },
    {
        "text": "Never give up. Keep moving forward.",
        "author": "Plato"
    },
    {
        "text": "Stay resilient. Success is a mindset.",
        "author": "Aristotle"
    },
    {
        "text": "Work hard in silence. Overcome fear.",
        "author": "Marie Curie"
    },
    {
        "text": "Embrace the journey. Never give up.",
        "author": "Socrates"
    },
    {
        "text": "Never give up. Be the change.",
        "author": "Steve Jobs"
    },
    {
        "text": "You can do it. Stay determined.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay focused. Be fearless.",
        "author": "Henry Ford"
    },
    {
        "text": "Overcome fear. Be the change.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay hungry. Stay hungry.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay humble. Be fearless.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Success is a mindset. Trust the process.",
        "author": "Socrates"
    },
    {
        "text": "Stay humble. Believe in yourself.",
        "author": "Henry Ford"
    },
    {
        "text": "Take the first step. Take the first step.",
        "author": "Plato"
    },
    {
        "text": "Keep going. Turn pain into power.",
        "author": "Walt Disney"
    },
    {
        "text": "Push your limits. Conquer your fears.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay resilient. Persevere.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Take the first step. Overcome fear.",
        "author": "Aristotle"
    },
    {
        "text": "Stay hungry. Stay hungry.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Work hard in silence. Be the light.",
        "author": "Aristotle"
    },
    {
        "text": "Keep moving forward. Rise above.",
        "author": "Steve Jobs"
    },
    {
        "text": "Overcome fear. Dream big.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay positive. Take the first step.",
        "author": "Albert Einstein"
    },
    {
        "text": "Create your own path. Make it happen.",
        "author": "Mark Twain"
    },
    {
        "text": "Overcome fear. Stay humble.",
        "author": "Sun Tzu"
    },
    {
        "text": "Overcome fear. Stay hungry.",
        "author": "Bruce Lee"
    },
    {
        "text": "You can do it. Stay humble.",
        "author": "Confucius"
    },
    {
        "text": "Rise above. Stay positive.",
        "author": "Maya Angelou"
    },
    {
        "text": "Work hard in silence. Stay focused.",
        "author": "Laozi"
    },
    {
        "text": "Stay positive. Create your own path.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Keep going. Stay determined.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay resilient. Persevere.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Keep moving forward. You can do it.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the change. Believe in yourself.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Work hard in silence. Stay positive.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay hungry. Rise above.",
        "author": "Maya Angelou"
    },
    {
        "text": "Create your own path. Keep going.",
        "author": "Bruce Lee"
    },
    {
        "text": "Be the light. Be fearless.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Keep moving forward. Stay positive.",
        "author": "Plato"
    },
    {
        "text": "Create your own path. Stay positive.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Overcome fear. Overcome fear.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay hungry. Trust the process.",
        "author": "Laozi"
    },
    {
        "text": "Keep pushing. Persevere.",
        "author": "Mark Twain"
    },
    {
        "text": "Be the change. Keep moving forward.",
        "author": "Steve Jobs"
    },
    {
        "text": "Be the light. Never give up.",
        "author": "Walt Disney"
    },
    {
        "text": "Believe in yourself. Stay strong.",
        "author": "Winston Churchill"
    },
    {
        "text": "Believe in yourself. Never give up.",
        "author": "Laozi"
    },
    {
        "text": "Overcome fear. Stay positive.",
        "author": "Albert Einstein"
    },
    {
        "text": "Success is a mindset. Be the light.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay resilient. Create your own path.",
        "author": "Helen Keller"
    },
    {
        "text": "Trust the process. Be the light.",
        "author": "Walt Disney"
    },
    {
        "text": "Overcome fear. Stay hungry.",
        "author": "Sun Tzu"
    },
    {
        "text": "Trust the process. Never give up.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Turn pain into power. Believe in yourself.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Keep going. Work hard in silence.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Keep going. Take the first step.",
        "author": "Aristotle"
    },
    {
        "text": "Keep moving forward. Turn pain into power.",
        "author": "Laozi"
    },
    {
        "text": "Stay resilient. Stay hungry.",
        "author": "Mark Twain"
    },
    {
        "text": "Push your limits. Create your own path.",
        "author": "Confucius"
    },
    {
        "text": "Conquer your fears. Keep pushing.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay humble. Make it happen.",
        "author": "Winston Churchill"
    },
    {
        "text": "Work hard in silence. Stay humble.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay determined. Be the light.",
        "author": "Steve Jobs"
    },
    {
        "text": "Overcome fear. Turn pain into power.",
        "author": "Confucius"
    },
    {
        "text": "Push your limits. Stay strong.",
        "author": "Socrates"
    },
    {
        "text": "Keep going. Persevere.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay positive. Work hard in silence.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay hungry. Turn pain into power.",
        "author": "Albert Einstein"
    },
    {
        "text": "Keep pushing. Believe in yourself.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Be fearless. Believe in yourself.",
        "author": "Steve Jobs"
    },
    {
        "text": "Take the first step. Dream big.",
        "author": "Aristotle"
    },
    {
        "text": "Trust the process. Keep pushing.",
        "author": "Laozi"
    },
    {
        "text": "Keep going. Success is a mindset.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay resilient. Trust the process.",
        "author": "Steve Jobs"
    },
    {
        "text": "Persevere. Keep moving forward.",
        "author": "Socrates"
    },
    {
        "text": "Stay determined. Work hard in silence.",
        "author": "Laozi"
    },
    {
        "text": "Trust the process. Make it happen.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Dream big. Create your own path.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay determined. Stay strong.",
        "author": "Isaac Newton"
    },
    {
        "text": "Embrace the journey. Dream big.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the change. Make it happen.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Rise above. Turn pain into power.",
        "author": "Plato"
    },
    {
        "text": "Never give up. Trust the process.",
        "author": "Walt Disney"
    },
    {
        "text": "Never give up. Stay humble.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Believe in yourself. Stay humble.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Success is a mindset. Be the light.",
        "author": "Maya Angelou"
    },
    {
        "text": "Trust the process. Make it happen.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay strong. Success is a mindset.",
        "author": "Marie Curie"
    },
    {
        "text": "Believe in yourself. Stay strong.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay humble. Take the first step.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay humble. Stay resilient.",
        "author": "Helen Keller"
    },
    {
        "text": "Work hard in silence. Stay humble.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay determined. Keep going.",
        "author": "Socrates"
    },
    {
        "text": "Be the change. Push your limits.",
        "author": "Winston Churchill"
    },
    {
        "text": "Overcome fear. Be the change.",
        "author": "Mark Twain"
    },
    {
        "text": "Trust the process. Stay hungry.",
        "author": "Helen Keller"
    },
    {
        "text": "Rise above. Make it happen.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Conquer your fears. Stay focused.",
        "author": "Henry Ford"
    },
    {
        "text": "Be fearless. Believe in yourself.",
        "author": "Winston Churchill"
    },
    {
        "text": "Never give up. Push your limits.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay resilient. Dream big.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay resilient. Be the change.",
        "author": "Mark Twain"
    },
    {
        "text": "Persevere. Stay resilient.",
        "author": "Helen Keller"
    },
    {
        "text": "Take the first step. You can do it.",
        "author": "Winston Churchill"
    },
    {
        "text": "Make it happen. Stay resilient.",
        "author": "Socrates"
    },
    {
        "text": "Stay humble. Conquer your fears.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Never give up. Dream big.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay resilient. Trust the process.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay hungry. Stay focused.",
        "author": "Walt Disney"
    },
    {
        "text": "Turn pain into power. You can do it.",
        "author": "Confucius"
    },
    {
        "text": "Be fearless. Stay determined.",
        "author": "Plato"
    },
    {
        "text": "Success is a mindset. Embrace the journey.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Create your own path. Persevere.",
        "author": "Albert Einstein"
    },
    {
        "text": "Believe in yourself. Stay positive.",
        "author": "Laozi"
    },
    {
        "text": "Dream big. Keep pushing.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay strong. Rise above.",
        "author": "Maya Angelou"
    },
    {
        "text": "Make it happen. Make it happen.",
        "author": "Bruce Lee"
    },
    {
        "text": "Success is a mindset. Keep going.",
        "author": "Helen Keller"
    },
    {
        "text": "Be fearless. Never give up.",
        "author": "Steve Jobs"
    },
    {
        "text": "Believe in yourself. Stay hungry.",
        "author": "Albert Einstein"
    },
    {
        "text": "Be the light. Rise above.",
        "author": "Laozi"
    },
    {
        "text": "Push your limits. Embrace the journey.",
        "author": "Walt Disney"
    },
    {
        "text": "Never give up. Keep moving forward.",
        "author": "Plato"
    },
    {
        "text": "Stay determined. Make it happen.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay positive. Embrace the journey.",
        "author": "Aristotle"
    },
    {
        "text": "Persevere. Stay strong.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay hungry. Dream big.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Take the first step. Dream big.",
        "author": "Laozi"
    },
    {
        "text": "Stay determined. Stay focused.",
        "author": "Isaac Newton"
    },
    {
        "text": "You can do it. Trust the process.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Be the change. Stay strong.",
        "author": "Helen Keller"
    },
    {
        "text": "Keep moving forward. Success is a mindset.",
        "author": "Plato"
    },
    {
        "text": "Trust the process. Keep going.",
        "author": "Winston Churchill"
    },
    {
        "text": "Work hard in silence. Keep moving forward.",
        "author": "Marie Curie"
    },
    {
        "text": "Be the change. Stay hungry.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Success is a mindset. Overcome fear.",
        "author": "Plato"
    },
    {
        "text": "Believe in yourself. Stay resilient.",
        "author": "Socrates"
    },
    {
        "text": "Be fearless. Be the light.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay humble. Stay resilient.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Take the first step. Stay resilient.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay strong. You can do it.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay focused. Work hard in silence.",
        "author": "Steve Jobs"
    },
    {
        "text": "You can do it. Trust the process.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be fearless. Rise above.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay hungry. Stay humble.",
        "author": "Bruce Lee"
    },
    {
        "text": "Persevere. Create your own path.",
        "author": "Laozi"
    },
    {
        "text": "Success is a mindset. Be the light.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay determined. Stay positive.",
        "author": "Marie Curie"
    },
    {
        "text": "Be the light. Stay positive.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay hungry. Work hard in silence.",
        "author": "Helen Keller"
    },
    {
        "text": "Be fearless. Stay humble.",
        "author": "Laozi"
    },
    {
        "text": "Push your limits. Persevere.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Take the first step. Embrace the journey.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Keep going. Stay humble.",
        "author": "Marie Curie"
    },
    {
        "text": "Rise above. Stay positive.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Keep pushing. Turn pain into power.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Rise above. Keep moving forward.",
        "author": "Albert Einstein"
    },
    {
        "text": "Keep moving forward. Keep pushing.",
        "author": "Albert Einstein"
    },
    {
        "text": "Persevere. Push your limits.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Work hard in silence. Never give up.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay focused. Be fearless.",
        "author": "Plato"
    },
    {
        "text": "Push your limits. Stay humble.",
        "author": "Isaac Newton"
    },
    {
        "text": "Create your own path. Stay determined.",
        "author": "Winston Churchill"
    },
    {
        "text": "Dream big. Stay strong.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay hungry. Trust the process.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be fearless. Persevere.",
        "author": "Walt Disney"
    },
    {
        "text": "Keep pushing. Be the change.",
        "author": "Winston Churchill"
    },
    {
        "text": "Trust the process. Trust the process.",
        "author": "Maya Angelou"
    },
    {
        "text": "Conquer your fears. Stay strong.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Keep moving forward. Keep moving forward.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Turn pain into power. Believe in yourself.",
        "author": "Bruce Lee"
    },
    {
        "text": "Dream big. You can do it.",
        "author": "Maya Angelou"
    },
    {
        "text": "Create your own path. Create your own path.",
        "author": "Mark Twain"
    },
    {
        "text": "Persevere. Stay hungry.",
        "author": "Albert Einstein"
    },
    {
        "text": "Keep pushing. Conquer your fears.",
        "author": "Confucius"
    },
    {
        "text": "Take the first step. You can do it.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Create your own path. Dream big.",
        "author": "Confucius"
    },
    {
        "text": "Stay determined. Conquer your fears.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay focused. Dream big.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Persevere. Keep moving forward.",
        "author": "Helen Keller"
    },
    {
        "text": "Embrace the journey. Make it happen.",
        "author": "Mark Twain"
    },
    {
        "text": "Make it happen. Make it happen.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay focused. Work hard in silence.",
        "author": "Helen Keller"
    },
    {
        "text": "Push your limits. You can do it.",
        "author": "Confucius"
    },
    {
        "text": "Embrace the journey. Make it happen.",
        "author": "Sun Tzu"
    },
    {
        "text": "Persevere. Stay determined.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Push your limits. Believe in yourself.",
        "author": "Maya Angelou"
    },
    {
        "text": "Conquer your fears. Stay resilient.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay strong. Embrace the journey.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Take the first step. Stay humble.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay determined. Make it happen.",
        "author": "Socrates"
    },
    {
        "text": "Overcome fear. Conquer your fears.",
        "author": "Confucius"
    },
    {
        "text": "Push your limits. Never give up.",
        "author": "Henry Ford"
    },
    {
        "text": "Push your limits. Work hard in silence.",
        "author": "Confucius"
    },
    {
        "text": "Overcome fear. Keep going.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay positive. Stay strong.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be the light. Stay humble.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Overcome fear. Overcome fear.",
        "author": "Maya Angelou"
    },
    {
        "text": "Persevere. Stay positive.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay strong. Stay resilient.",
        "author": "Maya Angelou"
    },
    {
        "text": "Keep going. Stay determined.",
        "author": "Socrates"
    },
    {
        "text": "Embrace the journey. Trust the process.",
        "author": "Winston Churchill"
    },
    {
        "text": "Push your limits. Success is a mindset.",
        "author": "Winston Churchill"
    },
    {
        "text": "Overcome fear. Create your own path.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Believe in yourself. Stay determined.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Push your limits. Never give up.",
        "author": "Socrates"
    },
    {
        "text": "Push your limits. Keep pushing.",
        "author": "Isaac Newton"
    },
    {
        "text": "Work hard in silence. Work hard in silence.",
        "author": "Maya Angelou"
    },
    {
        "text": "Never give up. Be fearless.",
        "author": "Marie Curie"
    },
    {
        "text": "Persevere. Trust the process.",
        "author": "Albert Einstein"
    },
    {
        "text": "Make it happen. Make it happen.",
        "author": "Bruce Lee"
    },
    {
        "text": "You can do it. Keep going.",
        "author": "Maya Angelou"
    },
    {
        "text": "Be the change. Turn pain into power.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Be the light. You can do it.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay focused. Persevere.",
        "author": "Confucius"
    },
    {
        "text": "Stay resilient. Be the change.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay hungry. Persevere.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Work hard in silence. Embrace the journey.",
        "author": "Henry Ford"
    },
    {
        "text": "Work hard in silence. Conquer your fears.",
        "author": "Laozi"
    },
    {
        "text": "Be fearless. Keep pushing.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Persevere. Stay hungry.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay hungry. Be the change.",
        "author": "Sun Tzu"
    },
    {
        "text": "Embrace the journey. Work hard in silence.",
        "author": "Laozi"
    },
    {
        "text": "Take the first step. Create your own path.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay strong. Work hard in silence.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Believe in yourself. Rise above.",
        "author": "Aristotle"
    },
    {
        "text": "Turn pain into power. Rise above.",
        "author": "Walt Disney"
    },
    {
        "text": "Take the first step. Overcome fear.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay humble. Be the change.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be fearless. Push your limits.",
        "author": "Confucius"
    },
    {
        "text": "Embrace the journey. Never give up.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay focused. Success is a mindset.",
        "author": "Walt Disney"
    },
    {
        "text": "Take the first step. Be fearless.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay resilient. Stay hungry.",
        "author": "Marie Curie"
    },
    {
        "text": "Never give up. Stay humble.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay positive. Conquer your fears.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay hungry. Take the first step.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay humble. Embrace the journey.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Trust the process. Keep going.",
        "author": "Walt Disney"
    },
    {
        "text": "Believe in yourself. You can do it.",
        "author": "Walt Disney"
    },
    {
        "text": "Keep moving forward. Stay humble.",
        "author": "Confucius"
    },
    {
        "text": "Be the light. Rise above.",
        "author": "Confucius"
    },
    {
        "text": "Create your own path. Embrace the journey.",
        "author": "Aristotle"
    },
    {
        "text": "Be fearless. Be the change.",
        "author": "Bruce Lee"
    },
    {
        "text": "Trust the process. Stay strong.",
        "author": "Walt Disney"
    },
    {
        "text": "Work hard in silence. Stay strong.",
        "author": "Sun Tzu"
    },
    {
        "text": "Push your limits. Stay resilient.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay humble. You can do it.",
        "author": "Socrates"
    },
    {
        "text": "Embrace the journey. Stay resilient.",
        "author": "Henry Ford"
    },
    {
        "text": "Rise above. Success is a mindset.",
        "author": "Helen Keller"
    },
    {
        "text": "Create your own path. Push your limits.",
        "author": "Bruce Lee"
    },
    {
        "text": "Overcome fear. Overcome fear.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Embrace the journey. You can do it.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay focused. Stay hungry.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Overcome fear. Trust the process.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Make it happen. Keep going.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay hungry. Success is a mindset.",
        "author": "Walt Disney"
    },
    {
        "text": "Success is a mindset. Keep pushing.",
        "author": "Maya Angelou"
    },
    {
        "text": "Be the light. Stay resilient.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay hungry. Overcome fear.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay focused. Be the light.",
        "author": "Plato"
    },
    {
        "text": "Turn pain into power. Be the light.",
        "author": "Confucius"
    },
    {
        "text": "Be fearless. Keep moving forward.",
        "author": "Plato"
    },
    {
        "text": "Success is a mindset. Be the light.",
        "author": "Mark Twain"
    },
    {
        "text": "Keep moving forward. Persevere.",
        "author": "Winston Churchill"
    },
    {
        "text": "Overcome fear. Overcome fear.",
        "author": "Henry Ford"
    },
    {
        "text": "Overcome fear. Embrace the journey.",
        "author": "Helen Keller"
    },
    {
        "text": "You can do it. Be fearless.",
        "author": "Helen Keller"
    },
    {
        "text": "Rise above. Stay positive.",
        "author": "Aristotle"
    },
    {
        "text": "Persevere. Push your limits.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay focused. Be fearless.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Overcome fear. Never give up.",
        "author": "Marie Curie"
    },
    {
        "text": "Be the change. You can do it.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be the change. Push your limits.",
        "author": "Winston Churchill"
    },
    {
        "text": "Create your own path. Embrace the journey.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Trust the process. Make it happen.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay determined. Stay strong.",
        "author": "Isaac Newton"
    },
    {
        "text": "Never give up. Rise above.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay strong. Make it happen.",
        "author": "Confucius"
    },
    {
        "text": "Be the light. Conquer your fears.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Keep pushing. Never give up.",
        "author": "Confucius"
    },
    {
        "text": "Be the change. Keep going.",
        "author": "Steve Jobs"
    },
    {
        "text": "Conquer your fears. Push your limits.",
        "author": "Mark Twain"
    },
    {
        "text": "Take the first step. Keep moving forward.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Be the change. Stay focused.",
        "author": "Walt Disney"
    },
    {
        "text": "Trust the process. Stay positive.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Keep moving forward. Be fearless.",
        "author": "Steve Jobs"
    },
    {
        "text": "Overcome fear. Stay focused.",
        "author": "Nikola Tesla"
    },
    {
        "text": "You can do it. Conquer your fears.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Keep pushing. Turn pain into power.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Create your own path. Keep going.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Make it happen. Work hard in silence.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay positive. Work hard in silence.",
        "author": "Isaac Newton"
    },
    {
        "text": "Rise above. Trust the process.",
        "author": "Maya Angelou"
    },
    {
        "text": "Never give up. Be the light.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay positive. Stay hungry.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Make it happen. Create your own path.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Push your limits. Stay positive.",
        "author": "Helen Keller"
    },
    {
        "text": "Keep going. Stay positive.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay humble. Embrace the journey.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay resilient. Be the change.",
        "author": "Sun Tzu"
    },
    {
        "text": "Rise above. You can do it.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay positive. Make it happen.",
        "author": "Confucius"
    },
    {
        "text": "Success is a mindset. Be the light.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay hungry. Be the light.",
        "author": "Mark Twain"
    },
    {
        "text": "Conquer your fears. Believe in yourself.",
        "author": "Walt Disney"
    },
    {
        "text": "Turn pain into power. Success is a mindset.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay humble. Work hard in silence.",
        "author": "Bruce Lee"
    },
    {
        "text": "Keep moving forward. Dream big.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Keep moving forward. Keep pushing.",
        "author": "Isaac Newton"
    },
    {
        "text": "Believe in yourself. You can do it.",
        "author": "Laozi"
    },
    {
        "text": "Never give up. Stay humble.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay strong. Stay focused.",
        "author": "Isaac Newton"
    },
    {
        "text": "Persevere. Keep moving forward.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Take the first step. You can do it.",
        "author": "Walt Disney"
    },
    {
        "text": "Embrace the journey. Overcome fear.",
        "author": "Marie Curie"
    },
    {
        "text": "Dream big. Never give up.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Create your own path. Be fearless.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Keep going. Be the light.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay hungry. Conquer your fears.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay humble. Success is a mindset.",
        "author": "Walt Disney"
    },
    {
        "text": "Trust the process. Take the first step.",
        "author": "Helen Keller"
    },
    {
        "text": "Turn pain into power. Be the light.",
        "author": "Plato"
    },
    {
        "text": "Believe in yourself. Stay hungry.",
        "author": "Bruce Lee"
    },
    {
        "text": "Dream big. Stay strong.",
        "author": "Steve Jobs"
    },
    {
        "text": "Trust the process. You can do it.",
        "author": "Socrates"
    },
    {
        "text": "Believe in yourself. Dream big.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Push your limits. Turn pain into power.",
        "author": "Bruce Lee"
    },
    {
        "text": "Embrace the journey. Create your own path.",
        "author": "Plato"
    },
    {
        "text": "Success is a mindset. Trust the process.",
        "author": "Laozi"
    },
    {
        "text": "You can do it. Create your own path.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be fearless. Stay hungry.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Keep moving forward. Stay focused.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay determined. Stay humble.",
        "author": "Socrates"
    },
    {
        "text": "Stay positive. Turn pain into power.",
        "author": "Plato"
    },
    {
        "text": "Be the light. Conquer your fears.",
        "author": "Walt Disney"
    },
    {
        "text": "Turn pain into power. Turn pain into power.",
        "author": "Mark Twain"
    },
    {
        "text": "Trust the process. Embrace the journey.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be the light. Stay focused.",
        "author": "Mark Twain"
    },
    {
        "text": "Be the light. Be fearless.",
        "author": "Henry Ford"
    },
    {
        "text": "Be the light. Conquer your fears.",
        "author": "Sun Tzu"
    },
    {
        "text": "Dream big. Believe in yourself.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay strong. Keep moving forward.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Rise above. Work hard in silence.",
        "author": "Mark Twain"
    },
    {
        "text": "Keep moving forward. Never give up.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Make it happen. Stay focused.",
        "author": "Walt Disney"
    },
    {
        "text": "Trust the process. You can do it.",
        "author": "Isaac Newton"
    },
    {
        "text": "Be the change. Make it happen.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Create your own path. Keep pushing.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay resilient. Success is a mindset.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay focused. Keep going.",
        "author": "Socrates"
    },
    {
        "text": "Persevere. Believe in yourself.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Work hard in silence. Stay humble.",
        "author": "Isaac Newton"
    },
    {
        "text": "Be fearless. You can do it.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay humble. Be the light.",
        "author": "Helen Keller"
    },
    {
        "text": "Make it happen. Stay focused.",
        "author": "Albert Einstein"
    },
    {
        "text": "Conquer your fears. Persevere.",
        "author": "Plato"
    },
    {
        "text": "Embrace the journey. Overcome fear.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Trust the process. Stay strong.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay focused. Stay hungry.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay focused. Keep moving forward.",
        "author": "Steve Jobs"
    },
    {
        "text": "Believe in yourself. Trust the process.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay positive. Make it happen.",
        "author": "Aristotle"
    },
    {
        "text": "Be the light. Keep going.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay determined. Keep pushing.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay resilient. Be the light.",
        "author": "Steve Jobs"
    },
    {
        "text": "Persevere. Persevere.",
        "author": "Maya Angelou"
    },
    {
        "text": "Be the change. Stay focused.",
        "author": "Walt Disney"
    },
    {
        "text": "Rise above. Keep pushing.",
        "author": "Helen Keller"
    },
    {
        "text": "Trust the process. Conquer your fears.",
        "author": "Aristotle"
    },
    {
        "text": "Keep going. Keep going.",
        "author": "Socrates"
    },
    {
        "text": "Rise above. Dream big.",
        "author": "Laozi"
    },
    {
        "text": "Success is a mindset. Believe in yourself.",
        "author": "Aristotle"
    },
    {
        "text": "Dream big. Trust the process.",
        "author": "Socrates"
    },
    {
        "text": "Never give up. Push your limits.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Embrace the journey. Push your limits.",
        "author": "Walt Disney"
    },
    {
        "text": "Be the change. Make it happen.",
        "author": "Plato"
    },
    {
        "text": "Overcome fear. Make it happen.",
        "author": "Plato"
    },
    {
        "text": "Take the first step. Keep going.",
        "author": "Helen Keller"
    },
    {
        "text": "Keep pushing. Be the change.",
        "author": "Maya Angelou"
    },
    {
        "text": "You can do it. Stay determined.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Work hard in silence. Embrace the journey.",
        "author": "Marie Curie"
    },
    {
        "text": "Work hard in silence. Embrace the journey.",
        "author": "Mark Twain"
    },
    {
        "text": "Keep pushing. Stay focused.",
        "author": "Confucius"
    },
    {
        "text": "Embrace the journey. Make it happen.",
        "author": "Plato"
    },
    {
        "text": "Work hard in silence. Dream big.",
        "author": "Plato"
    },
    {
        "text": "Overcome fear. Stay positive.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay resilient. Stay hungry.",
        "author": "Mark Twain"
    },
    {
        "text": "Believe in yourself. Believe in yourself.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay focused. Stay hungry.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay focused. Stay resilient.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay positive. Be fearless.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Believe in yourself. Make it happen.",
        "author": "Laozi"
    },
    {
        "text": "Make it happen. Stay determined.",
        "author": "Socrates"
    },
    {
        "text": "Never give up. Keep pushing.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Keep moving forward. Be the change.",
        "author": "Socrates"
    },
    {
        "text": "Stay positive. Never give up.",
        "author": "Winston Churchill"
    },
    {
        "text": "Take the first step. Conquer your fears.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Keep going. You can do it.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Never give up. Conquer your fears.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay focused. You can do it.",
        "author": "Aristotle"
    },
    {
        "text": "Stay focused. Stay determined.",
        "author": "Aristotle"
    },
    {
        "text": "Work hard in silence. Rise above.",
        "author": "Albert Einstein"
    },
    {
        "text": "Work hard in silence. You can do it.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Success is a mindset. Be the light.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay positive. Stay positive.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay focused. Stay resilient.",
        "author": "Albert Einstein"
    },
    {
        "text": "Conquer your fears. You can do it.",
        "author": "Sun Tzu"
    },
    {
        "text": "Trust the process. Success is a mindset.",
        "author": "Maya Angelou"
    },
    {
        "text": "Work hard in silence. Keep going.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay determined. Make it happen.",
        "author": "Sun Tzu"
    },
    {
        "text": "Be the light. Turn pain into power.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay humble. Rise above.",
        "author": "Mark Twain"
    },
    {
        "text": "Make it happen. Stay positive.",
        "author": "Marie Curie"
    },
    {
        "text": "Persevere. Keep moving forward.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Be fearless. Stay strong.",
        "author": "Isaac Newton"
    },
    {
        "text": "Never give up. Never give up.",
        "author": "Laozi"
    },
    {
        "text": "Be fearless. Be the light.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Turn pain into power. Conquer your fears.",
        "author": "Confucius"
    },
    {
        "text": "Stay resilient. Create your own path.",
        "author": "Henry Ford"
    },
    {
        "text": "Overcome fear. Be the light.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Rise above. Keep pushing.",
        "author": "Winston Churchill"
    },
    {
        "text": "Turn pain into power. Stay determined.",
        "author": "Isaac Newton"
    },
    {
        "text": "Dream big. Turn pain into power.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay humble. You can do it.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay positive. Conquer your fears.",
        "author": "Plato"
    },
    {
        "text": "Make it happen. Dream big.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay determined. Keep going.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Dream big. Stay humble.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Keep moving forward. Be the light.",
        "author": "Nikola Tesla"
    },
    {
        "text": "You can do it. Persevere.",
        "author": "Walt Disney"
    },
    {
        "text": "Keep moving forward. Persevere.",
        "author": "Plato"
    },
    {
        "text": "Stay hungry. Stay resilient.",
        "author": "Winston Churchill"
    },
    {
        "text": "Trust the process. Keep going.",
        "author": "Albert Einstein"
    },
    {
        "text": "Success is a mindset. Be the light.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay strong. Push your limits.",
        "author": "Helen Keller"
    },
    {
        "text": "Success is a mindset. Embrace the journey.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay strong. Be fearless.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Work hard in silence. Stay humble.",
        "author": "Sun Tzu"
    },
    {
        "text": "Keep pushing. Keep pushing.",
        "author": "Bruce Lee"
    },
    {
        "text": "Success is a mindset. Turn pain into power.",
        "author": "Isaac Newton"
    },
    {
        "text": "Take the first step. Dream big.",
        "author": "Albert Einstein"
    },
    {
        "text": "Be fearless. Stay positive.",
        "author": "Galileo Galilei"
    },
    {
        "text": "You can do it. Never give up.",
        "author": "Maya Angelou"
    },
    {
        "text": "Keep going. Embrace the journey.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Push your limits. Take the first step.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay focused. Stay humble.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay resilient. Stay determined.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay resilient. Take the first step.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Embrace the journey. Embrace the journey.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Push your limits. Stay positive.",
        "author": "Aristotle"
    },
    {
        "text": "Dream big. Stay resilient.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Persevere. Make it happen.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay hungry. Push your limits.",
        "author": "Confucius"
    },
    {
        "text": "Dream big. Believe in yourself.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay resilient. Persevere.",
        "author": "Isaac Newton"
    },
    {
        "text": "You can do it. Conquer your fears.",
        "author": "Mark Twain"
    },
    {
        "text": "Keep moving forward. Keep pushing.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay strong. Stay humble.",
        "author": "Isaac Newton"
    },
    {
        "text": "Success is a mindset. Overcome fear.",
        "author": "Sun Tzu"
    },
    {
        "text": "Persevere. Be the light.",
        "author": "Plato"
    },
    {
        "text": "Success is a mindset. Rise above.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Keep going. Create your own path.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Keep moving forward. Be fearless.",
        "author": "Plato"
    },
    {
        "text": "Conquer your fears. Persevere.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay focused. Stay strong.",
        "author": "Winston Churchill"
    },
    {
        "text": "Take the first step. Rise above.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Dream big. Persevere.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Keep going. Stay humble.",
        "author": "Sun Tzu"
    },
    {
        "text": "Believe in yourself. Keep pushing.",
        "author": "Henry Ford"
    },
    {
        "text": "You can do it. Work hard in silence.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Persevere. Overcome fear.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Turn pain into power. Stay determined.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay hungry. Success is a mindset.",
        "author": "Steve Jobs"
    },
    {
        "text": "Persevere. Never give up.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Trust the process. Turn pain into power.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Success is a mindset. Keep pushing.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay strong. Rise above.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay focused. Believe in yourself.",
        "author": "Sun Tzu"
    },
    {
        "text": "Conquer your fears. Dream big.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay positive. Stay focused.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay strong. Keep pushing.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay focused. Be the light.",
        "author": "Laozi"
    },
    {
        "text": "Conquer your fears. Stay determined.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay determined. Persevere.",
        "author": "Aristotle"
    },
    {
        "text": "Trust the process. Persevere.",
        "author": "Walt Disney"
    },
    {
        "text": "Conquer your fears. Believe in yourself.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay focused. Stay humble.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Persevere. Conquer your fears.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Be the change. Never give up.",
        "author": "Winston Churchill"
    },
    {
        "text": "Make it happen. Make it happen.",
        "author": "Socrates"
    },
    {
        "text": "Stay resilient. Make it happen.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Keep pushing. You can do it.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay strong. Never give up.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay humble. Stay strong.",
        "author": "Marie Curie"
    },
    {
        "text": "Be the change. Embrace the journey.",
        "author": "Laozi"
    },
    {
        "text": "Rise above. Push your limits.",
        "author": "Maya Angelou"
    },
    {
        "text": "Embrace the journey. Rise above.",
        "author": "Laozi"
    },
    {
        "text": "Persevere. Believe in yourself.",
        "author": "Socrates"
    },
    {
        "text": "Stay strong. Keep going.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay strong. Success is a mindset.",
        "author": "Walt Disney"
    },
    {
        "text": "Believe in yourself. Dream big.",
        "author": "Bruce Lee"
    },
    {
        "text": "Be the light. Take the first step.",
        "author": "Albert Einstein"
    },
    {
        "text": "Be the light. Make it happen.",
        "author": "Laozi"
    },
    {
        "text": "Trust the process. Believe in yourself.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay humble. Be the light.",
        "author": "Plato"
    },
    {
        "text": "Create your own path. Never give up.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Persevere. Rise above.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay humble. Keep going.",
        "author": "Walt Disney"
    },
    {
        "text": "Believe in yourself. Never give up.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay strong. Overcome fear.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Work hard in silence. Push your limits.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Keep moving forward. Be fearless.",
        "author": "Bruce Lee"
    },
    {
        "text": "Keep going. Dream big.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Push your limits. Stay humble.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Success is a mindset. Be the light.",
        "author": "Winston Churchill"
    },
    {
        "text": "Make it happen. Dream big.",
        "author": "Maya Angelou"
    },
    {
        "text": "Believe in yourself. Embrace the journey.",
        "author": "Winston Churchill"
    },
    {
        "text": "Embrace the journey. You can do it.",
        "author": "Laozi"
    },
    {
        "text": "You can do it. Stay positive.",
        "author": "Walt Disney"
    },
    {
        "text": "Make it happen. Stay hungry.",
        "author": "Nelson Mandela"
    },
    {
        "text": "You can do it. Stay humble.",
        "author": "Socrates"
    },
    {
        "text": "Keep going. Be the light.",
        "author": "Plato"
    },
    {
        "text": "Stay focused. Stay positive.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Overcome fear. Embrace the journey.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay resilient. Keep moving forward.",
        "author": "Mark Twain"
    },
    {
        "text": "Success is a mindset. Stay resilient.",
        "author": "Laozi"
    },
    {
        "text": "Push your limits. Overcome fear.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Dream big. Turn pain into power.",
        "author": "Laozi"
    },
    {
        "text": "Conquer your fears. Stay positive.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay determined. Be the change.",
        "author": "Isaac Newton"
    },
    {
        "text": "Overcome fear. You can do it.",
        "author": "Helen Keller"
    },
    {
        "text": "Keep moving forward. Stay positive.",
        "author": "Plato"
    },
    {
        "text": "Rise above. Turn pain into power.",
        "author": "Plato"
    },
    {
        "text": "Rise above. Overcome fear.",
        "author": "Walt Disney"
    },
    {
        "text": "Believe in yourself. Turn pain into power.",
        "author": "Maya Angelou"
    },
    {
        "text": "Trust the process. Push your limits.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Persevere. Stay determined.",
        "author": "Maya Angelou"
    },
    {
        "text": "Push your limits. Embrace the journey.",
        "author": "Maya Angelou"
    },
    {
        "text": "Be the change. Dream big.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Persevere. Keep going.",
        "author": "Aristotle"
    },
    {
        "text": "Push your limits. Take the first step.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay focused. Persevere.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay resilient. Trust the process.",
        "author": "Henry Ford"
    },
    {
        "text": "Be fearless. Overcome fear.",
        "author": "Bruce Lee"
    },
    {
        "text": "Be the change. Never give up.",
        "author": "Albert Einstein"
    },
    {
        "text": "Keep moving forward. Rise above.",
        "author": "Laozi"
    },
    {
        "text": "Be fearless. Keep going.",
        "author": "Laozi"
    },
    {
        "text": "You can do it. Make it happen.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay humble. Keep pushing.",
        "author": "Helen Keller"
    },
    {
        "text": "Make it happen. Dream big.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be fearless. Turn pain into power.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay hungry. Dream big.",
        "author": "Galileo Galilei"
    },
    {
        "text": "You can do it. Stay hungry.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Trust the process. Stay focused.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay determined. Stay determined.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay strong. Embrace the journey.",
        "author": "Mark Twain"
    },
    {
        "text": "You can do it. Keep moving forward.",
        "author": "Winston Churchill"
    },
    {
        "text": "Make it happen. You can do it.",
        "author": "Albert Einstein"
    },
    {
        "text": "Never give up. Conquer your fears.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep going. Trust the process.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay strong. Stay humble.",
        "author": "Isaac Newton"
    },
    {
        "text": "Create your own path. Trust the process.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay determined. Take the first step.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay hungry. Work hard in silence.",
        "author": "Socrates"
    },
    {
        "text": "Push your limits. Take the first step.",
        "author": "Maya Angelou"
    },
    {
        "text": "Persevere. Persevere.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay focused. Turn pain into power.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Overcome fear. Be fearless.",
        "author": "Helen Keller"
    },
    {
        "text": "You can do it. Be fearless.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay determined. Turn pain into power.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Take the first step. Keep moving forward.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Conquer your fears. Overcome fear.",
        "author": "Laozi"
    },
    {
        "text": "Persevere. Dream big.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be fearless. Stay focused.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Keep going. Never give up.",
        "author": "Bruce Lee"
    },
    {
        "text": "Keep moving forward. Conquer your fears.",
        "author": "Sun Tzu"
    },
    {
        "text": "Conquer your fears. Dream big.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Be the light. Be fearless.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay hungry. Conquer your fears.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay focused. Make it happen.",
        "author": "Henry Ford"
    },
    {
        "text": "Turn pain into power. Make it happen.",
        "author": "Socrates"
    },
    {
        "text": "Keep moving forward. Success is a mindset.",
        "author": "Mark Twain"
    },
    {
        "text": "Work hard in silence. Stay hungry.",
        "author": "Mark Twain"
    },
    {
        "text": "Believe in yourself. Stay focused.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Success is a mindset. Be fearless.",
        "author": "Albert Einstein"
    },
    {
        "text": "Keep going. Embrace the journey.",
        "author": "Maya Angelou"
    },
    {
        "text": "Trust the process. Stay hungry.",
        "author": "Sun Tzu"
    },
    {
        "text": "Make it happen. Trust the process.",
        "author": "Laozi"
    },
    {
        "text": "Create your own path. Work hard in silence.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Keep moving forward. Stay hungry.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Take the first step. Create your own path.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep pushing. Stay positive.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Keep going. Stay focused.",
        "author": "Aristotle"
    },
    {
        "text": "Stay hungry. Keep pushing.",
        "author": "Sun Tzu"
    },
    {
        "text": "Be fearless. Rise above.",
        "author": "Plato"
    },
    {
        "text": "Overcome fear. Make it happen.",
        "author": "Aristotle"
    },
    {
        "text": "Keep pushing. Keep moving forward.",
        "author": "Isaac Newton"
    },
    {
        "text": "Create your own path. Be the light.",
        "author": "Plato"
    },
    {
        "text": "Trust the process. Push your limits.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay strong. Success is a mindset.",
        "author": "Winston Churchill"
    },
    {
        "text": "You can do it. Keep pushing.",
        "author": "Plato"
    },
    {
        "text": "Success is a mindset. Persevere.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay resilient. Stay determined.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay focused. Conquer your fears.",
        "author": "Isaac Newton"
    },
    {
        "text": "Create your own path. Stay positive.",
        "author": "Laozi"
    },
    {
        "text": "Never give up. Keep going.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay humble. Never give up.",
        "author": "Isaac Newton"
    },
    {
        "text": "Be fearless. Stay resilient.",
        "author": "Maya Angelou"
    },
    {
        "text": "Turn pain into power. Embrace the journey.",
        "author": "Plato"
    },
    {
        "text": "Work hard in silence. Work hard in silence.",
        "author": "Winston Churchill"
    },
    {
        "text": "Success is a mindset. Make it happen.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Rise above. Stay positive.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay hungry. Be the light.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Conquer your fears. Keep going.",
        "author": "Steve Jobs"
    },
    {
        "text": "Believe in yourself. Believe in yourself.",
        "author": "Winston Churchill"
    },
    {
        "text": "Be the change. Work hard in silence.",
        "author": "Confucius"
    },
    {
        "text": "Embrace the journey. Stay focused.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay humble. Overcome fear.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the light. Stay focused.",
        "author": "Henry Ford"
    },
    {
        "text": "Take the first step. Rise above.",
        "author": "Albert Einstein"
    },
    {
        "text": "Be fearless. Work hard in silence.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay resilient. Make it happen.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "You can do it. Stay determined.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Turn pain into power. Be the change.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay strong. Turn pain into power.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep pushing. Stay positive.",
        "author": "Aristotle"
    },
    {
        "text": "Success is a mindset. Take the first step.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay humble. Be the light.",
        "author": "Helen Keller"
    },
    {
        "text": "You can do it. Dream big.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep pushing. Work hard in silence.",
        "author": "Confucius"
    },
    {
        "text": "Be the light. Turn pain into power.",
        "author": "Aristotle"
    },
    {
        "text": "Take the first step. Stay positive.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Overcome fear. Stay hungry.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay resilient. Stay strong.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay positive. Overcome fear.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay strong. Be the change.",
        "author": "Isaac Newton"
    },
    {
        "text": "Embrace the journey. Rise above.",
        "author": "Confucius"
    },
    {
        "text": "Conquer your fears. Make it happen.",
        "author": "Winston Churchill"
    },
    {
        "text": "Success is a mindset. Believe in yourself.",
        "author": "Confucius"
    },
    {
        "text": "Keep moving forward. Stay positive.",
        "author": "Nelson Mandela"
    },
    {
        "text": "You can do it. Be fearless.",
        "author": "Isaac Newton"
    },
    {
        "text": "Take the first step. Keep moving forward.",
        "author": "Bruce Lee"
    },
    {
        "text": "Persevere. Be the change.",
        "author": "Sun Tzu"
    },
    {
        "text": "Be fearless. Stay humble.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Take the first step. Rise above.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Create your own path. Success is a mindset.",
        "author": "Aristotle"
    },
    {
        "text": "Make it happen. Embrace the journey.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be the light. Work hard in silence.",
        "author": "Sun Tzu"
    },
    {
        "text": "Be fearless. Stay hungry.",
        "author": "Socrates"
    },
    {
        "text": "Rise above. Trust the process.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay determined. Stay focused.",
        "author": "Albert Einstein"
    },
    {
        "text": "Turn pain into power. Push your limits.",
        "author": "Isaac Newton"
    },
    {
        "text": "Trust the process. Persevere.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Never give up. Success is a mindset.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Persevere. Persevere.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Keep moving forward. Dream big.",
        "author": "Aristotle"
    },
    {
        "text": "Conquer your fears. Be the light.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay strong. Push your limits.",
        "author": "Albert Einstein"
    },
    {
        "text": "Be fearless. Embrace the journey.",
        "author": "Confucius"
    },
    {
        "text": "Never give up. Create your own path.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay strong. Stay resilient.",
        "author": "Marie Curie"
    },
    {
        "text": "Be the light. Keep moving forward.",
        "author": "Helen Keller"
    },
    {
        "text": "Embrace the journey. Be fearless.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Embrace the journey. Push your limits.",
        "author": "Aristotle"
    },
    {
        "text": "Conquer your fears. Stay positive.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay determined. Success is a mindset.",
        "author": "Aristotle"
    },
    {
        "text": "Create your own path. Keep pushing.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay hungry. Stay strong.",
        "author": "Sun Tzu"
    },
    {
        "text": "Take the first step. Turn pain into power.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Turn pain into power. Dream big.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay focused. Make it happen.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Create your own path. Be fearless.",
        "author": "Aristotle"
    },
    {
        "text": "Turn pain into power. Rise above.",
        "author": "Laozi"
    },
    {
        "text": "Stay hungry. Stay focused.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Push your limits. Stay focused.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be fearless. Stay humble.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay focused. Stay focused.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay hungry. Push your limits.",
        "author": "Henry Ford"
    },
    {
        "text": "Push your limits. Stay determined.",
        "author": "Winston Churchill"
    },
    {
        "text": "Persevere. Stay humble.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be the light. Turn pain into power.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Conquer your fears. Stay positive.",
        "author": "Sun Tzu"
    },
    {
        "text": "Keep moving forward. Stay strong.",
        "author": "Socrates"
    },
    {
        "text": "Conquer your fears. Success is a mindset.",
        "author": "Socrates"
    },
    {
        "text": "Trust the process. Turn pain into power.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Embrace the journey. You can do it.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay strong. Trust the process.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay resilient. You can do it.",
        "author": "Sun Tzu"
    },
    {
        "text": "Dream big. Create your own path.",
        "author": "Sun Tzu"
    },
    {
        "text": "Success is a mindset. Be the change.",
        "author": "Nelson Mandela"
    },
    {
        "text": "You can do it. Push your limits.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay resilient. Keep going.",
        "author": "Confucius"
    },
    {
        "text": "Keep moving forward. Push your limits.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Be the change. Stay positive.",
        "author": "Bruce Lee"
    },
    {
        "text": "Be fearless. Keep pushing.",
        "author": "Steve Jobs"
    },
    {
        "text": "Rise above. Keep pushing.",
        "author": "Confucius"
    },
    {
        "text": "Make it happen. Stay determined.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep moving forward. Keep going.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Keep pushing. Be the light.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay strong. Stay hungry.",
        "author": "Henry Ford"
    },
    {
        "text": "Dream big. Stay hungry.",
        "author": "Confucius"
    },
    {
        "text": "Dream big. Stay focused.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Take the first step. Dream big.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay strong. You can do it.",
        "author": "Helen Keller"
    },
    {
        "text": "Be the light. Never give up.",
        "author": "Plato"
    },
    {
        "text": "Take the first step. Stay humble.",
        "author": "Walt Disney"
    },
    {
        "text": "Persevere. Success is a mindset.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Dream big. Stay humble.",
        "author": "Isaac Newton"
    },
    {
        "text": "Be the light. You can do it.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Turn pain into power. Stay resilient.",
        "author": "Socrates"
    },
    {
        "text": "Dream big. Overcome fear.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay determined. Keep pushing.",
        "author": "Albert Einstein"
    },
    {
        "text": "Keep going. Work hard in silence.",
        "author": "Bruce Lee"
    },
    {
        "text": "Trust the process. Conquer your fears.",
        "author": "Sun Tzu"
    },
    {
        "text": "Keep pushing. Overcome fear.",
        "author": "Plato"
    },
    {
        "text": "Stay focused. Keep going.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay focused. Stay positive.",
        "author": "Isaac Newton"
    },
    {
        "text": "Create your own path. Stay strong.",
        "author": "Laozi"
    },
    {
        "text": "Embrace the journey. Turn pain into power.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Never give up. Make it happen.",
        "author": "Confucius"
    },
    {
        "text": "Overcome fear. Stay strong.",
        "author": "Maya Angelou"
    },
    {
        "text": "Make it happen. Turn pain into power.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Success is a mindset. Stay focused.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Trust the process. Stay humble.",
        "author": "Mark Twain"
    },
    {
        "text": "Turn pain into power. Dream big.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay humble. Never give up.",
        "author": "Walt Disney"
    },
    {
        "text": "Be the light. You can do it.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep going. Success is a mindset.",
        "author": "Bruce Lee"
    },
    {
        "text": "Make it happen. Take the first step.",
        "author": "Marie Curie"
    },
    {
        "text": "Work hard in silence. Keep going.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the light. Create your own path.",
        "author": "Steve Jobs"
    },
    {
        "text": "Make it happen. Turn pain into power.",
        "author": "Marie Curie"
    },
    {
        "text": "Be fearless. Stay humble.",
        "author": "Henry Ford"
    },
    {
        "text": "Believe in yourself. Keep going.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Trust the process. Keep going.",
        "author": "Laozi"
    },
    {
        "text": "Stay strong. You can do it.",
        "author": "Plato"
    },
    {
        "text": "Stay determined. Be fearless.",
        "author": "Marie Curie"
    },
    {
        "text": "Keep pushing. Stay strong.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay hungry. Rise above.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay focused. Embrace the journey.",
        "author": "Socrates"
    },
    {
        "text": "Never give up. Keep going.",
        "author": "Laozi"
    },
    {
        "text": "Be the light. Stay strong.",
        "author": "Helen Keller"
    },
    {
        "text": "Turn pain into power. Create your own path.",
        "author": "Aristotle"
    },
    {
        "text": "Create your own path. Stay positive.",
        "author": "Albert Einstein"
    },
    {
        "text": "Dream big. Push your limits.",
        "author": "Bruce Lee"
    },
    {
        "text": "Make it happen. Make it happen.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Create your own path. Success is a mindset.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay positive. Rise above.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Overcome fear. Stay focused.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Turn pain into power. Persevere.",
        "author": "Plato"
    },
    {
        "text": "Keep moving forward. Success is a mindset.",
        "author": "Henry Ford"
    },
    {
        "text": "Persevere. Make it happen.",
        "author": "Helen Keller"
    },
    {
        "text": "Embrace the journey. Stay resilient.",
        "author": "Sun Tzu"
    },
    {
        "text": "Be fearless. Keep pushing.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Keep pushing. Never give up.",
        "author": "Albert Einstein"
    },
    {
        "text": "Push your limits. Stay determined.",
        "author": "Helen Keller"
    },
    {
        "text": "Be the light. Create your own path.",
        "author": "Albert Einstein"
    },
    {
        "text": "Create your own path. Rise above.",
        "author": "Aristotle"
    },
    {
        "text": "Stay focused. Rise above.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Turn pain into power. Be fearless.",
        "author": "Confucius"
    },
    {
        "text": "Be the change. Be fearless.",
        "author": "Isaac Newton"
    },
    {
        "text": "Turn pain into power. Never give up.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Embrace the journey. Keep pushing.",
        "author": "Confucius"
    },
    {
        "text": "Stay positive. Be fearless.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Work hard in silence. Be the light.",
        "author": "Socrates"
    },
    {
        "text": "Create your own path. Rise above.",
        "author": "Helen Keller"
    },
    {
        "text": "Overcome fear. Rise above.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay determined. Believe in yourself.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep pushing. Keep pushing.",
        "author": "Sun Tzu"
    },
    {
        "text": "Turn pain into power. You can do it.",
        "author": "Aristotle"
    },
    {
        "text": "Success is a mindset. Be fearless.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay positive. Overcome fear.",
        "author": "Socrates"
    },
    {
        "text": "Stay hungry. Rise above.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Push your limits. Create your own path.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay focused. Keep moving forward.",
        "author": "Mark Twain"
    },
    {
        "text": "Be the light. Dream big.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay humble. Dream big.",
        "author": "Isaac Newton"
    },
    {
        "text": "Turn pain into power. Persevere.",
        "author": "Maya Angelou"
    },
    {
        "text": "Turn pain into power. Stay humble.",
        "author": "Sun Tzu"
    },
    {
        "text": "Take the first step. Stay determined.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Conquer your fears. Create your own path.",
        "author": "Confucius"
    },
    {
        "text": "Believe in yourself. Overcome fear.",
        "author": "Plato"
    },
    {
        "text": "Stay hungry. Stay determined.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay resilient. Rise above.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay humble. Make it happen.",
        "author": "Plato"
    },
    {
        "text": "Make it happen. Embrace the journey.",
        "author": "Sun Tzu"
    },
    {
        "text": "Be the light. Persevere.",
        "author": "Confucius"
    },
    {
        "text": "Push your limits. Be the light.",
        "author": "Mark Twain"
    },
    {
        "text": "Be the change. Overcome fear.",
        "author": "Aristotle"
    },
    {
        "text": "Overcome fear. Rise above.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Turn pain into power. Stay focused.",
        "author": "Aristotle"
    },
    {
        "text": "Be fearless. Create your own path.",
        "author": "Henry Ford"
    },
    {
        "text": "Overcome fear. Rise above.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Conquer your fears. Stay determined.",
        "author": "Sun Tzu"
    },
    {
        "text": "Never give up. Never give up.",
        "author": "Walt Disney"
    },
    {
        "text": "Never give up. Be the change.",
        "author": "Aristotle"
    },
    {
        "text": "Stay hungry. Believe in yourself.",
        "author": "Aristotle"
    },
    {
        "text": "Success is a mindset. Stay focused.",
        "author": "Marie Curie"
    },
    {
        "text": "Believe in yourself. Keep going.",
        "author": "Maya Angelou"
    },
    {
        "text": "Turn pain into power. Embrace the journey.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay positive. Dream big.",
        "author": "Maya Angelou"
    },
    {
        "text": "Turn pain into power. Stay determined.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Conquer your fears. Stay strong.",
        "author": "Socrates"
    },
    {
        "text": "Rise above. Stay determined.",
        "author": "Maya Angelou"
    },
    {
        "text": "Conquer your fears. Be the change.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Rise above. Success is a mindset.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay strong. Take the first step.",
        "author": "Mark Twain"
    },
    {
        "text": "Be the light. Push your limits.",
        "author": "Laozi"
    },
    {
        "text": "Stay humble. Be the light.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Dream big. Push your limits.",
        "author": "Nikola Tesla"
    },
    {
        "text": "You can do it. Never give up.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Trust the process. Keep pushing.",
        "author": "Socrates"
    },
    {
        "text": "Dream big. Take the first step.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Embrace the journey. Trust the process.",
        "author": "Henry Ford"
    },
    {
        "text": "Push your limits. Turn pain into power.",
        "author": "Plato"
    },
    {
        "text": "Stay strong. Believe in yourself.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay resilient. Be the light.",
        "author": "Confucius"
    },
    {
        "text": "Dream big. Push your limits.",
        "author": "Laozi"
    },
    {
        "text": "Be the change. Overcome fear.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Success is a mindset. Work hard in silence.",
        "author": "Confucius"
    },
    {
        "text": "Keep going. Never give up.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay determined. You can do it.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay positive. Success is a mindset.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Be the light. Take the first step.",
        "author": "Bruce Lee"
    },
    {
        "text": "Be the light. Keep going.",
        "author": "Henry Ford"
    },
    {
        "text": "Believe in yourself. Keep going.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Believe in yourself. Stay humble.",
        "author": "Winston Churchill"
    },
    {
        "text": "Keep moving forward. Stay hungry.",
        "author": "Marie Curie"
    },
    {
        "text": "Keep pushing. Be fearless.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Never give up. Overcome fear.",
        "author": "Steve Jobs"
    },
    {
        "text": "Create your own path. Make it happen.",
        "author": "Albert Einstein"
    },
    {
        "text": "Dream big. Stay humble.",
        "author": "Isaac Newton"
    },
    {
        "text": "Trust the process. Work hard in silence.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Take the first step. Stay humble.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Overcome fear. Turn pain into power.",
        "author": "Aristotle"
    },
    {
        "text": "Stay hungry. Be the light.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Trust the process. Success is a mindset.",
        "author": "Henry Ford"
    },
    {
        "text": "Overcome fear. Stay determined.",
        "author": "Mark Twain"
    },
    {
        "text": "Believe in yourself. Trust the process.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay strong. Push your limits.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay strong. Be fearless.",
        "author": "Laozi"
    },
    {
        "text": "Never give up. Keep going.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay strong. Work hard in silence.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay focused. Believe in yourself.",
        "author": "Steve Jobs"
    },
    {
        "text": "Create your own path. Rise above.",
        "author": "Henry Ford"
    },
    {
        "text": "Create your own path. Never give up.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay positive. Keep going.",
        "author": "Albert Einstein"
    },
    {
        "text": "You can do it. Be fearless.",
        "author": "Marie Curie"
    },
    {
        "text": "Keep pushing. Be fearless.",
        "author": "Socrates"
    },
    {
        "text": "Never give up. Stay positive.",
        "author": "Socrates"
    },
    {
        "text": "Stay positive. Keep going.",
        "author": "Marie Curie"
    },
    {
        "text": "Push your limits. Overcome fear.",
        "author": "Maya Angelou"
    },
    {
        "text": "Push your limits. Stay humble.",
        "author": "Socrates"
    },
    {
        "text": "Never give up. Take the first step.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Make it happen. Keep going.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Keep going. Rise above.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay humble. Be the change.",
        "author": "Isaac Newton"
    },
    {
        "text": "Make it happen. Create your own path.",
        "author": "Walt Disney"
    },
    {
        "text": "Persevere. Persevere.",
        "author": "Isaac Newton"
    },
    {
        "text": "Rise above. Turn pain into power.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Trust the process. Stay positive.",
        "author": "Socrates"
    },
    {
        "text": "Stay hungry. Success is a mindset.",
        "author": "Laozi"
    },
    {
        "text": "Trust the process. Persevere.",
        "author": "Confucius"
    },
    {
        "text": "Never give up. Keep moving forward.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Persevere. Stay positive.",
        "author": "Aristotle"
    },
    {
        "text": "Keep pushing. Believe in yourself.",
        "author": "Plato"
    },
    {
        "text": "Be the light. Stay focused.",
        "author": "Sun Tzu"
    },
    {
        "text": "Dream big. Keep pushing.",
        "author": "Socrates"
    },
    {
        "text": "Take the first step. Work hard in silence.",
        "author": "Henry Ford"
    },
    {
        "text": "Never give up. Keep pushing.",
        "author": "Laozi"
    },
    {
        "text": "Make it happen. Never give up.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Dream big. Turn pain into power.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Push your limits. Rise above.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay hungry. Turn pain into power.",
        "author": "Confucius"
    },
    {
        "text": "Keep moving forward. Success is a mindset.",
        "author": "Walt Disney"
    },
    {
        "text": "Persevere. Keep going.",
        "author": "Helen Keller"
    },
    {
        "text": "Keep going. Never give up.",
        "author": "Mark Twain"
    },
    {
        "text": "Be fearless. Trust the process.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Never give up. Never give up.",
        "author": "Aristotle"
    },
    {
        "text": "Stay strong. Stay resilient.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay strong. Keep pushing.",
        "author": "Maya Angelou"
    },
    {
        "text": "Success is a mindset. Rise above.",
        "author": "Socrates"
    },
    {
        "text": "Overcome fear. Believe in yourself.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the change. Stay resilient.",
        "author": "Maya Angelou"
    },
    {
        "text": "Rise above. Make it happen.",
        "author": "Mark Twain"
    },
    {
        "text": "Conquer your fears. Stay hungry.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay strong. Keep moving forward.",
        "author": "Henry Ford"
    },
    {
        "text": "You can do it. Keep pushing.",
        "author": "Aristotle"
    },
    {
        "text": "Create your own path. Dream big.",
        "author": "Steve Jobs"
    },
    {
        "text": "Be the light. Create your own path.",
        "author": "Confucius"
    },
    {
        "text": "Rise above. Rise above.",
        "author": "Maya Angelou"
    },
    {
        "text": "Keep going. Stay resilient.",
        "author": "Aristotle"
    },
    {
        "text": "Keep pushing. Persevere.",
        "author": "Socrates"
    },
    {
        "text": "Push your limits. Stay humble.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Be the light. Be the change.",
        "author": "Winston Churchill"
    },
    {
        "text": "Push your limits. Keep going.",
        "author": "Aristotle"
    },
    {
        "text": "Persevere. Push your limits.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Make it happen. Success is a mindset.",
        "author": "Sun Tzu"
    },
    {
        "text": "You can do it. Persevere.",
        "author": "Plato"
    },
    {
        "text": "Overcome fear. Persevere.",
        "author": "Sun Tzu"
    },
    {
        "text": "Conquer your fears. Conquer your fears.",
        "author": "Maya Angelou"
    },
    {
        "text": "Be the change. Keep going.",
        "author": "Walt Disney"
    },
    {
        "text": "You can do it. Keep going.",
        "author": "Bruce Lee"
    },
    {
        "text": "Keep going. Believe in yourself.",
        "author": "Socrates"
    },
    {
        "text": "Stay focused. You can do it.",
        "author": "Sun Tzu"
    },
    {
        "text": "Persevere. Keep going.",
        "author": "Helen Keller"
    },
    {
        "text": "Trust the process. Conquer your fears.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Overcome fear. Never give up.",
        "author": "Marie Curie"
    },
    {
        "text": "Turn pain into power. Persevere.",
        "author": "Bruce Lee"
    },
    {
        "text": "Never give up. Stay hungry.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay hungry. Stay determined.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay humble. Keep going.",
        "author": "Plato"
    },
    {
        "text": "Persevere. Stay positive.",
        "author": "Laozi"
    },
    {
        "text": "Rise above. Trust the process.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Keep going. Be the light.",
        "author": "Albert Einstein"
    },
    {
        "text": "Turn pain into power. Work hard in silence.",
        "author": "Helen Keller"
    },
    {
        "text": "Dream big. Never give up.",
        "author": "Winston Churchill"
    },
    {
        "text": "Success is a mindset. Be the change.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay strong. Stay hungry.",
        "author": "Plato"
    },
    {
        "text": "Success is a mindset. Create your own path.",
        "author": "Maya Angelou"
    },
    {
        "text": "Create your own path. Turn pain into power.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay humble. Stay hungry.",
        "author": "Laozi"
    },
    {
        "text": "Push your limits. Be the change.",
        "author": "Confucius"
    },
    {
        "text": "Be the change. Make it happen.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be the light. Embrace the journey.",
        "author": "Albert Einstein"
    },
    {
        "text": "Trust the process. Trust the process.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay humble. Turn pain into power.",
        "author": "Henry Ford"
    },
    {
        "text": "Rise above. Work hard in silence.",
        "author": "Bruce Lee"
    },
    {
        "text": "Make it happen. Embrace the journey.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay hungry. Conquer your fears.",
        "author": "Marie Curie"
    },
    {
        "text": "Conquer your fears. Stay resilient.",
        "author": "Confucius"
    },
    {
        "text": "Be the light. Stay determined.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Make it happen. Embrace the journey.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be the light. Take the first step.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Embrace the journey. Rise above.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be the light. Believe in yourself.",
        "author": "Confucius"
    },
    {
        "text": "Keep going. Embrace the journey.",
        "author": "Mark Twain"
    },
    {
        "text": "Create your own path. Persevere.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Keep moving forward. Stay determined.",
        "author": "Henry Ford"
    },
    {
        "text": "Take the first step. Stay hungry.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Make it happen. Turn pain into power.",
        "author": "Maya Angelou"
    },
    {
        "text": "Rise above. Stay determined.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be fearless. Embrace the journey.",
        "author": "Confucius"
    },
    {
        "text": "Be the change. Stay focused.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Dream big. Create your own path.",
        "author": "Steve Jobs"
    },
    {
        "text": "Be the light. Create your own path.",
        "author": "Aristotle"
    },
    {
        "text": "Stay determined. Push your limits.",
        "author": "Isaac Newton"
    },
    {
        "text": "Overcome fear. Be the light.",
        "author": "Bruce Lee"
    },
    {
        "text": "Be the light. Turn pain into power.",
        "author": "Bruce Lee"
    },
    {
        "text": "Overcome fear. Never give up.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay strong. Push your limits.",
        "author": "Albert Einstein"
    },
    {
        "text": "Be the light. Stay humble.",
        "author": "Winston Churchill"
    },
    {
        "text": "Overcome fear. Work hard in silence.",
        "author": "Sun Tzu"
    },
    {
        "text": "Believe in yourself. Stay humble.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Believe in yourself. Make it happen.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Be fearless. Take the first step.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay positive. Work hard in silence.",
        "author": "Steve Jobs"
    },
    {
        "text": "Be the light. Stay determined.",
        "author": "Maya Angelou"
    },
    {
        "text": "Trust the process. Never give up.",
        "author": "Socrates"
    },
    {
        "text": "Embrace the journey. Work hard in silence.",
        "author": "Walt Disney"
    },
    {
        "text": "Keep moving forward. Keep moving forward.",
        "author": "Isaac Newton"
    },
    {
        "text": "Success is a mindset. Keep pushing.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Make it happen. Be fearless.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the change. Be the light.",
        "author": "Henry Ford"
    },
    {
        "text": "You can do it. Stay hungry.",
        "author": "Henry Ford"
    },
    {
        "text": "Overcome fear. Rise above.",
        "author": "Aristotle"
    },
    {
        "text": "Embrace the journey. Success is a mindset.",
        "author": "Bruce Lee"
    },
    {
        "text": "Success is a mindset. Persevere.",
        "author": "Bruce Lee"
    },
    {
        "text": "You can do it. Make it happen.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay positive. Never give up.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Keep going. Work hard in silence.",
        "author": "Winston Churchill"
    },
    {
        "text": "Make it happen. Success is a mindset.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay strong. Success is a mindset.",
        "author": "Steve Jobs"
    },
    {
        "text": "Push your limits. Work hard in silence.",
        "author": "Marie Curie"
    },
    {
        "text": "Turn pain into power. Work hard in silence.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay positive. Keep pushing.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay hungry. Conquer your fears.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay resilient. Create your own path.",
        "author": "Henry Ford"
    },
    {
        "text": "Turn pain into power. Be the change.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Push your limits. Stay humble.",
        "author": "Socrates"
    },
    {
        "text": "Rise above. Stay hungry.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay resilient. Turn pain into power.",
        "author": "Bruce Lee"
    },
    {
        "text": "Turn pain into power. You can do it.",
        "author": "Aristotle"
    },
    {
        "text": "Stay hungry. Conquer your fears.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay resilient. Trust the process.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay resilient. Stay hungry.",
        "author": "Socrates"
    },
    {
        "text": "Success is a mindset. Stay positive.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay focused. Stay hungry.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Trust the process. Rise above.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Success is a mindset. Stay humble.",
        "author": "Sun Tzu"
    },
    {
        "text": "Keep going. Keep going.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Persevere. Embrace the journey.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay humble. Work hard in silence.",
        "author": "Plato"
    },
    {
        "text": "Embrace the journey. Never give up.",
        "author": "Mark Twain"
    },
    {
        "text": "Embrace the journey. Keep going.",
        "author": "Steve Jobs"
    },
    {
        "text": "Turn pain into power. Success is a mindset.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Dream big. Be fearless.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Success is a mindset. Push your limits.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay resilient. Embrace the journey.",
        "author": "Aristotle"
    },
    {
        "text": "Dream big. Stay focused.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Keep pushing. Make it happen.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Make it happen. Be the change.",
        "author": "Socrates"
    },
    {
        "text": "You can do it. Overcome fear.",
        "author": "Steve Jobs"
    },
    {
        "text": "Dream big. Never give up.",
        "author": "Winston Churchill"
    },
    {
        "text": "Keep going. Success is a mindset.",
        "author": "Steve Jobs"
    },
    {
        "text": "Overcome fear. Take the first step.",
        "author": "Henry Ford"
    },
    {
        "text": "Push your limits. Keep going.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay focused. Stay resilient.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Conquer your fears. Conquer your fears.",
        "author": "Socrates"
    },
    {
        "text": "Stay resilient. Stay humble.",
        "author": "Aristotle"
    },
    {
        "text": "Take the first step. Take the first step.",
        "author": "Sun Tzu"
    },
    {
        "text": "Create your own path. Work hard in silence.",
        "author": "Henry Ford"
    },
    {
        "text": "Be fearless. Stay hungry.",
        "author": "Socrates"
    },
    {
        "text": "Be the light. Embrace the journey.",
        "author": "Confucius"
    },
    {
        "text": "Trust the process. Stay hungry.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Success is a mindset. Stay humble.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Conquer your fears. Stay resilient.",
        "author": "Bruce Lee"
    },
    {
        "text": "Overcome fear. Stay focused.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Be the light. Rise above.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Work hard in silence. Conquer your fears.",
        "author": "Socrates"
    },
    {
        "text": "Overcome fear. Create your own path.",
        "author": "Aristotle"
    },
    {
        "text": "Stay resilient. Overcome fear.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep going. Embrace the journey.",
        "author": "Isaac Newton"
    },
    {
        "text": "Embrace the journey. Push your limits.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Work hard in silence. Keep going.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Push your limits. Conquer your fears.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay resilient. Be fearless.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Conquer your fears. Push your limits.",
        "author": "Henry Ford"
    },
    {
        "text": "Be the change. Create your own path.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Turn pain into power. Never give up.",
        "author": "Sun Tzu"
    },
    {
        "text": "Keep moving forward. Be fearless.",
        "author": "Plato"
    },
    {
        "text": "Dream big. Work hard in silence.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the change. Rise above.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "You can do it. Stay hungry.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Conquer your fears. Conquer your fears.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay focused. Never give up.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Rise above. You can do it.",
        "author": "Plato"
    },
    {
        "text": "Turn pain into power. Push your limits.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Create your own path. Persevere.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay hungry. Keep pushing.",
        "author": "Socrates"
    },
    {
        "text": "Conquer your fears. Keep pushing.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay hungry. You can do it.",
        "author": "Bruce Lee"
    },
    {
        "text": "Believe in yourself. Overcome fear.",
        "author": "Plato"
    },
    {
        "text": "Stay positive. Be the change.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Never give up. Overcome fear.",
        "author": "Marie Curie"
    },
    {
        "text": "Never give up. Turn pain into power.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Be the change. Turn pain into power.",
        "author": "Mark Twain"
    },
    {
        "text": "Conquer your fears. Be fearless.",
        "author": "Laozi"
    },
    {
        "text": "Stay focused. Stay resilient.",
        "author": "Laozi"
    },
    {
        "text": "Stay positive. Keep moving forward.",
        "author": "Aristotle"
    },
    {
        "text": "Rise above. Stay resilient.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay determined. Keep moving forward.",
        "author": "Plato"
    },
    {
        "text": "Stay hungry. Keep pushing.",
        "author": "Laozi"
    },
    {
        "text": "Be fearless. Never give up.",
        "author": "Sun Tzu"
    },
    {
        "text": "Persevere. Be fearless.",
        "author": "Confucius"
    },
    {
        "text": "Be the change. Success is a mindset.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay humble. Stay humble.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Make it happen. Overcome fear.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay humble. Keep moving forward.",
        "author": "Sun Tzu"
    },
    {
        "text": "Success is a mindset. Believe in yourself.",
        "author": "Sun Tzu"
    },
    {
        "text": "Success is a mindset. Stay positive.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay hungry. Take the first step.",
        "author": "Confucius"
    },
    {
        "text": "Take the first step. Be fearless.",
        "author": "Isaac Newton"
    },
    {
        "text": "Success is a mindset. Believe in yourself.",
        "author": "Laozi"
    },
    {
        "text": "Stay resilient. Never give up.",
        "author": "Bruce Lee"
    },
    {
        "text": "Take the first step. Keep moving forward.",
        "author": "Winston Churchill"
    },
    {
        "text": "Keep going. Trust the process.",
        "author": "Helen Keller"
    },
    {
        "text": "Be the light. Take the first step.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep pushing. Stay resilient.",
        "author": "Bruce Lee"
    },
    {
        "text": "Take the first step. Make it happen.",
        "author": "Albert Einstein"
    },
    {
        "text": "Work hard in silence. Be the change.",
        "author": "Nelson Mandela"
    },
    {
        "text": "You can do it. Turn pain into power.",
        "author": "Socrates"
    },
    {
        "text": "Rise above. Never give up.",
        "author": "Plato"
    },
    {
        "text": "Trust the process. Stay humble.",
        "author": "Laozi"
    },
    {
        "text": "Overcome fear. Be the light.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay hungry. Stay determined.",
        "author": "Walt Disney"
    },
    {
        "text": "Never give up. Keep going.",
        "author": "Plato"
    },
    {
        "text": "You can do it. Persevere.",
        "author": "Sun Tzu"
    },
    {
        "text": "Conquer your fears. Stay positive.",
        "author": "Laozi"
    },
    {
        "text": "Believe in yourself. Rise above.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Create your own path. Never give up.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Conquer your fears. Persevere.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay strong. Be the light.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Dream big. Work hard in silence.",
        "author": "Albert Einstein"
    },
    {
        "text": "Push your limits. Work hard in silence.",
        "author": "Henry Ford"
    },
    {
        "text": "Rise above. Conquer your fears.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay strong. Persevere.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Take the first step. Make it happen.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay strong. Stay positive.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay strong. Dream big.",
        "author": "Socrates"
    },
    {
        "text": "Trust the process. Stay strong.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Keep pushing. Create your own path.",
        "author": "Henry Ford"
    },
    {
        "text": "Make it happen. Stay hungry.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay hungry. Conquer your fears.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay determined. Persevere.",
        "author": "Confucius"
    },
    {
        "text": "Create your own path. Persevere.",
        "author": "Confucius"
    },
    {
        "text": "Stay humble. Persevere.",
        "author": "Albert Einstein"
    },
    {
        "text": "Believe in yourself. Push your limits.",
        "author": "Albert Einstein"
    },
    {
        "text": "Persevere. Stay focused.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Overcome fear. Stay focused.",
        "author": "Mark Twain"
    },
    {
        "text": "Create your own path. Embrace the journey.",
        "author": "Plato"
    },
    {
        "text": "Be fearless. Stay hungry.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Create your own path. Push your limits.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay positive. Push your limits.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Believe in yourself. Trust the process.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Trust the process. Conquer your fears.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay hungry. Keep going.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Conquer your fears. Stay resilient.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Rise above. Make it happen.",
        "author": "Henry Ford"
    },
    {
        "text": "Keep pushing. Be the change.",
        "author": "Aristotle"
    },
    {
        "text": "Stay determined. Turn pain into power.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay strong. Keep moving forward.",
        "author": "Sun Tzu"
    },
    {
        "text": "Be fearless. Stay positive.",
        "author": "Plato"
    },
    {
        "text": "Keep pushing. Stay determined.",
        "author": "Socrates"
    },
    {
        "text": "Stay strong. Conquer your fears.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay resilient. Embrace the journey.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay strong. Take the first step.",
        "author": "Helen Keller"
    },
    {
        "text": "Take the first step. Keep moving forward.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Push your limits. Stay resilient.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Overcome fear. Rise above.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay humble. Keep going.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep pushing. Be fearless.",
        "author": "Marie Curie"
    },
    {
        "text": "Create your own path. Stay positive.",
        "author": "Maya Angelou"
    },
    {
        "text": "Dream big. Create your own path.",
        "author": "Albert Einstein"
    },
    {
        "text": "Rise above. Keep pushing.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Take the first step. Create your own path.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay resilient. Work hard in silence.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Never give up. Keep moving forward.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Overcome fear. Be the light.",
        "author": "Laozi"
    },
    {
        "text": "Never give up. Be the light.",
        "author": "Plato"
    },
    {
        "text": "Be the change. You can do it.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the change. Be the change.",
        "author": "Aristotle"
    },
    {
        "text": "Stay hungry. Rise above.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay humble. Dream big.",
        "author": "Aristotle"
    },
    {
        "text": "Stay strong. Conquer your fears.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Believe in yourself. Rise above.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay positive. Trust the process.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Keep going. Overcome fear.",
        "author": "Laozi"
    },
    {
        "text": "Stay strong. Be the change.",
        "author": "Plato"
    },
    {
        "text": "Conquer your fears. Trust the process.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Be fearless. Take the first step.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay hungry. Trust the process.",
        "author": "Helen Keller"
    },
    {
        "text": "You can do it. Success is a mindset.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Believe in yourself. Keep pushing.",
        "author": "Albert Einstein"
    },
    {
        "text": "Be the change. Work hard in silence.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Work hard in silence. Stay strong.",
        "author": "Bruce Lee"
    },
    {
        "text": "Keep pushing. Embrace the journey.",
        "author": "Helen Keller"
    },
    {
        "text": "Trust the process. You can do it.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay hungry. Make it happen.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Keep going. Be the light.",
        "author": "Laozi"
    },
    {
        "text": "Work hard in silence. Stay resilient.",
        "author": "Sun Tzu"
    },
    {
        "text": "Keep moving forward. Take the first step.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay humble. Push your limits.",
        "author": "Confucius"
    },
    {
        "text": "Trust the process. Keep moving forward.",
        "author": "Confucius"
    },
    {
        "text": "Stay humble. Believe in yourself.",
        "author": "Laozi"
    },
    {
        "text": "Push your limits. Stay hungry.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Rise above. Turn pain into power.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Make it happen. Conquer your fears.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Believe in yourself. Dream big.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay positive. Conquer your fears.",
        "author": "Laozi"
    },
    {
        "text": "Success is a mindset. Stay strong.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay strong. Stay positive.",
        "author": "Walt Disney"
    },
    {
        "text": "Success is a mindset. Conquer your fears.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Keep pushing. Embrace the journey.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Be the change. Create your own path.",
        "author": "Steve Jobs"
    },
    {
        "text": "Conquer your fears. Be the change.",
        "author": "Albert Einstein"
    },
    {
        "text": "Take the first step. Stay determined.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay resilient. Keep pushing.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay resilient. Create your own path.",
        "author": "Henry Ford"
    },
    {
        "text": "Embrace the journey. You can do it.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay strong. Keep moving forward.",
        "author": "Bruce Lee"
    },
    {
        "text": "You can do it. Keep pushing.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Be the light. Work hard in silence.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay strong. Embrace the journey.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Create your own path. Take the first step.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Rise above. Take the first step.",
        "author": "Plato"
    },
    {
        "text": "Be fearless. You can do it.",
        "author": "Aristotle"
    },
    {
        "text": "Keep pushing. Push your limits.",
        "author": "Sun Tzu"
    },
    {
        "text": "Be fearless. Success is a mindset.",
        "author": "Albert Einstein"
    },
    {
        "text": "Create your own path. Stay positive.",
        "author": "Plato"
    },
    {
        "text": "Stay positive. You can do it.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Dream big. Take the first step.",
        "author": "Walt Disney"
    },
    {
        "text": "Embrace the journey. Persevere.",
        "author": "Helen Keller"
    },
    {
        "text": "Push your limits. Believe in yourself.",
        "author": "Winston Churchill"
    },
    {
        "text": "Rise above. Stay focused.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Push your limits. Push your limits.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay determined. Stay resilient.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay humble. Make it happen.",
        "author": "Steve Jobs"
    },
    {
        "text": "Work hard in silence. Be fearless.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Take the first step. Keep pushing.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay strong. Stay determined.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "You can do it. Success is a mindset.",
        "author": "Laozi"
    },
    {
        "text": "Believe in yourself. Trust the process.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay humble. Push your limits.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Believe in yourself. You can do it.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay determined. Persevere.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay positive. Persevere.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay hungry. Success is a mindset.",
        "author": "Confucius"
    },
    {
        "text": "Turn pain into power. You can do it.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Be the light. Stay determined.",
        "author": "Henry Ford"
    },
    {
        "text": "Be the change. Rise above.",
        "author": "Bruce Lee"
    },
    {
        "text": "Keep moving forward. Turn pain into power.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay focused. Stay strong.",
        "author": "Mark Twain"
    },
    {
        "text": "You can do it. Success is a mindset.",
        "author": "Albert Einstein"
    },
    {
        "text": "Be fearless. Keep going.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Trust the process. Keep pushing.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Embrace the journey. Believe in yourself.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay hungry. Create your own path.",
        "author": "Marie Curie"
    },
    {
        "text": "Embrace the journey. Keep pushing.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Turn pain into power. Be fearless.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Persevere. Stay humble.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay humble. Make it happen.",
        "author": "Plato"
    },
    {
        "text": "Stay resilient. Take the first step.",
        "author": "Isaac Newton"
    },
    {
        "text": "Rise above. Keep going.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay humble. Conquer your fears.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Stay strong. Work hard in silence.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay humble. Keep pushing.",
        "author": "Aristotle"
    },
    {
        "text": "You can do it. Stay strong.",
        "author": "Maya Angelou"
    },
    {
        "text": "Dream big. Take the first step.",
        "author": "Steve Jobs"
    },
    {
        "text": "Trust the process. Push your limits.",
        "author": "Albert Einstein"
    },
    {
        "text": "Create your own path. Take the first step.",
        "author": "Laozi"
    },
    {
        "text": "Be fearless. Stay strong.",
        "author": "Henry Ford"
    },
    {
        "text": "Stay strong. Believe in yourself.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Turn pain into power. Stay resilient.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Trust the process. Trust the process.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay focused. Be the change.",
        "author": "Helen Keller"
    },
    {
        "text": "Be the light. Keep going.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay humble. Be the light.",
        "author": "Helen Keller"
    },
    {
        "text": "Stay focused. Never give up.",
        "author": "Henry Ford"
    },
    {
        "text": "Take the first step. Stay resilient.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay humble. Stay humble.",
        "author": "Laozi"
    },
    {
        "text": "Rise above. Success is a mindset.",
        "author": "Steve Jobs"
    },
    {
        "text": "Work hard in silence. Work hard in silence.",
        "author": "Plato"
    },
    {
        "text": "Stay resilient. Overcome fear.",
        "author": "Aristotle"
    },
    {
        "text": "Trust the process. Be fearless.",
        "author": "Helen Keller"
    },
    {
        "text": "Be fearless. Stay positive.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Turn pain into power. Stay focused.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Success is a mindset. Overcome fear.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Make it happen. Stay positive.",
        "author": "Aristotle"
    },
    {
        "text": "Overcome fear. Trust the process.",
        "author": "Mark Twain"
    },
    {
        "text": "Push your limits. Be the light.",
        "author": "Sun Tzu"
    },
    {
        "text": "Success is a mindset. Be the change.",
        "author": "Aristotle"
    },
    {
        "text": "Stay resilient. Success is a mindset.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Work hard in silence. Keep pushing.",
        "author": "Marie Curie"
    },
    {
        "text": "Dream big. Overcome fear.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep going. Overcome fear.",
        "author": "Plato"
    },
    {
        "text": "Stay positive. Embrace the journey.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Stay humble. Never give up.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Trust the process. Work hard in silence.",
        "author": "Henry Ford"
    },
    {
        "text": "Persevere. You can do it.",
        "author": "Isaac Newton"
    },
    {
        "text": "Keep moving forward. Stay focused.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Work hard in silence. Create your own path.",
        "author": "Henry Ford"
    },
    {
        "text": "You can do it. Overcome fear.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay hungry. Take the first step.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Keep moving forward. Persevere.",
        "author": "Laozi"
    },
    {
        "text": "Be the light. Keep moving forward.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Push your limits. Keep moving forward.",
        "author": "Plato"
    },
    {
        "text": "Create your own path. Stay hungry.",
        "author": "Bruce Lee"
    },
    {
        "text": "Never give up. Keep moving forward.",
        "author": "Helen Keller"
    },
    {
        "text": "Embrace the journey. Rise above.",
        "author": "Helen Keller"
    },
    {
        "text": "Keep moving forward. Stay hungry.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Keep moving forward. Embrace the journey.",
        "author": "Aristotle"
    },
    {
        "text": "Stay positive. Make it happen.",
        "author": "Aristotle"
    },
    {
        "text": "Stay determined. You can do it.",
        "author": "Sun Tzu"
    },
    {
        "text": "Success is a mindset. Overcome fear.",
        "author": "Steve Jobs"
    },
    {
        "text": "Make it happen. Stay hungry.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Trust the process. Turn pain into power.",
        "author": "Mark Twain"
    },
    {
        "text": "Dream big. Never give up.",
        "author": "Steve Jobs"
    },
    {
        "text": "Stay positive. Rise above.",
        "author": "Plato"
    },
    {
        "text": "Create your own path. Keep pushing.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Rise above. Rise above.",
        "author": "Bruce Lee"
    },
    {
        "text": "Work hard in silence. Stay positive.",
        "author": "Socrates"
    },
    {
        "text": "Be the light. Stay resilient.",
        "author": "Confucius"
    },
    {
        "text": "Keep moving forward. Trust the process.",
        "author": "Isaac Newton"
    },
    {
        "text": "Believe in yourself. Push your limits.",
        "author": "Winston Churchill"
    },
    {
        "text": "Stay positive. Be the light.",
        "author": "Albert Einstein"
    },
    {
        "text": "Take the first step. Be fearless.",
        "author": "Mark Twain"
    },
    {
        "text": "Conquer your fears. Stay hungry.",
        "author": "Socrates"
    },
    {
        "text": "Work hard in silence. Create your own path.",
        "author": "Steve Jobs"
    },
    {
        "text": "Dream big. Stay focused.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep going. Stay strong.",
        "author": "Maya Angelou"
    },
    {
        "text": "Dream big. Stay hungry.",
        "author": "Albert Einstein"
    },
    {
        "text": "Create your own path. Conquer your fears.",
        "author": "Isaac Newton"
    },
    {
        "text": "Be the light. Take the first step.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay humble. Push your limits.",
        "author": "Steve Jobs"
    },
    {
        "text": "Embrace the journey. Be the light.",
        "author": "Bruce Lee"
    },
    {
        "text": "Keep going. Keep moving forward.",
        "author": "Bruce Lee"
    },
    {
        "text": "Stay humble. Persevere.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Keep moving forward. Stay positive.",
        "author": "Plato"
    },
    {
        "text": "Be the change. Conquer your fears.",
        "author": "Plato"
    },
    {
        "text": "Stay strong. Take the first step.",
        "author": "Socrates"
    },
    {
        "text": "Be fearless. Embrace the journey.",
        "author": "Confucius"
    },
    {
        "text": "Keep pushing. Believe in yourself.",
        "author": "Confucius"
    },
    {
        "text": "Embrace the journey. Be the light.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Stay hungry. Rise above.",
        "author": "Bruce Lee"
    },
    {
        "text": "Rise above. Keep moving forward.",
        "author": "Maya Angelou"
    },
    {
        "text": "Embrace the journey. Turn pain into power.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay strong. Rise above.",
        "author": "Walt Disney"
    },
    {
        "text": "Take the first step. Dream big.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Keep moving forward. Make it happen.",
        "author": "Confucius"
    },
    {
        "text": "Dream big. Success is a mindset.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Keep moving forward. Believe in yourself.",
        "author": "Maya Angelou"
    },
    {
        "text": "Stay determined. Believe in yourself.",
        "author": "Socrates"
    },
    {
        "text": "Stay focused. Stay focused.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay hungry. Be fearless.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Rise above. Stay humble.",
        "author": "Henry Ford"
    },
    {
        "text": "Embrace the journey. Conquer your fears.",
        "author": "Sun Tzu"
    },
    {
        "text": "Persevere. You can do it.",
        "author": "Maya Angelou"
    },
    {
        "text": "Create your own path. Push your limits.",
        "author": "Helen Keller"
    },
    {
        "text": "Embrace the journey. Keep moving forward.",
        "author": "Marie Curie"
    },
    {
        "text": "Stay focused. Keep going.",
        "author": "Sun Tzu"
    },
    {
        "text": "Stay strong. Keep going.",
        "author": "Mark Twain"
    },
    {
        "text": "Make it happen. Be fearless.",
        "author": "Sun Tzu"
    },
    {
        "text": "Push your limits. Persevere.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Conquer your fears. Believe in yourself.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Work hard in silence. Embrace the journey.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Persevere. Take the first step.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Dream big. Believe in yourself.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay hungry. Success is a mindset.",
        "author": "Marie Curie"
    },
    {
        "text": "Be the light. Stay determined.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay resilient. Overcome fear.",
        "author": "Confucius"
    },
    {
        "text": "Embrace the journey. Believe in yourself.",
        "author": "Mark Twain"
    },
    {
        "text": "Create your own path. Keep pushing.",
        "author": "Isaac Newton"
    },
    {
        "text": "Never give up. Trust the process.",
        "author": "Helen Keller"
    },
    {
        "text": "Embrace the journey. Stay resilient.",
        "author": "Plato"
    },
    {
        "text": "Stay humble. Dream big.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay positive. Be the light.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Take the first step. Stay humble.",
        "author": "Helen Keller"
    },
    {
        "text": "Be fearless. Make it happen.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Be fearless. Create your own path.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Trust the process. Work hard in silence.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Be fearless. Stay humble.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Stay resilient. Stay strong.",
        "author": "Confucius"
    },
    {
        "text": "Create your own path. Stay focused.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Keep pushing. Believe in yourself.",
        "author": "Helen Keller"
    },
    {
        "text": "Believe in yourself. Take the first step.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Stay strong. Dream big.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Take the first step. Stay humble.",
        "author": "Bruce Lee"
    },
    {
        "text": "Be fearless. Be the light.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Success is a mindset. Trust the process.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay focused. Turn pain into power.",
        "author": "Winston Churchill"
    },
    {
        "text": "Overcome fear. Stay focused.",
        "author": "Maya Angelou"
    },
    {
        "text": "Push your limits. Push your limits.",
        "author": "Walt Disney"
    },
    {
        "text": "Keep moving forward. Be the change.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Push your limits. Trust the process.",
        "author": "Helen Keller"
    },
    {
        "text": "Keep moving forward. Success is a mindset.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Push your limits. Stay hungry.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Keep going. Embrace the journey.",
        "author": "Steve Jobs"
    },
    {
        "text": "Take the first step. Take the first step.",
        "author": "Albert Einstein"
    },
    {
        "text": "Stay resilient. Make it happen.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay focused. Dream big.",
        "author": "Confucius"
    },
    {
        "text": "Be the light. Keep going.",
        "author": "Maya Angelou"
    },
    {
        "text": "Keep pushing. Be fearless.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Push your limits. Conquer your fears.",
        "author": "Maya Angelou"
    },
    {
        "text": "You can do it. Stay resilient.",
        "author": "Sun Tzu"
    },
    {
        "text": "Create your own path. Stay positive.",
        "author": "Steve Jobs"
    },
    {
        "text": "Keep going. Stay positive.",
        "author": "Walt Disney"
    },
    {
        "text": "Stay hungry. Stay determined.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Make it happen. Turn pain into power.",
        "author": "Aristotle"
    },
    {
        "text": "Make it happen. Embrace the journey.",
        "author": "Nikola Tesla"
    },
    {
        "text": "Stay hungry. Stay resilient.",
        "author": "Bruce Lee"
    },
    {
        "text": "Never give up. Stay humble.",
        "author": "Mark Twain"
    },
    {
        "text": "Stay strong. Stay positive.",
        "author": "Maya Angelou"
    },
    {
        "text": "Believe in yourself. Push your limits.",
        "author": "Sun Tzu"
    },
    {
        "text": "Dream big. Rise above.",
        "author": "Isaac Newton"
    },
    {
        "text": "Stay strong. Stay resilient.",
        "author": "Galileo Galilei"
    },
    {
        "text": "Stay hungry. Never give up.",
        "author": "Walt Disney"
    }
];

export default quotes;