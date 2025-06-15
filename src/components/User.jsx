import { useState } from 'react';

export default function UserProfile() {
  const [formData, setFormData] = useState({
    name: 'Yash Yadav',
    username: 'yasx50',
    email: 'yash@example.com',
    avatar: '',
    bio: 'Full-stack web developer 🚀 | MERN | Python | Learning in Public',
    progress: 80,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar' && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/v1/students/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center p-4">
      <div className="p-6 rounded-xl w-full max-w-4xl shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-4">
            <img
              src={formData.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${formData.name}`}
              alt="avatar"
              className="w-32 h-32 rounded-full border-4 border-rose-400 object-cover"
            />
            <input
              type="file"
              accept="image/*"
              name="avatar"
              onChange={handleChange}
              className="text-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 rounded-md border border-gray-600 bg-[#121212] text-white w-full" required />
            <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="p-2 rounded-md border border-gray-600 bg-[#121212] text-white w-full" required />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 rounded-md border border-gray-600 bg-[#121212] text-white w-full md:col-span-2" required />
          </div>

          <textarea name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange} rows={4} className="p-2 rounded-md border border-gray-600 bg-[#121212] text-white w-full resize-y" />

          <div>
            <label className="block mb-1">Progress: {formData.progress}%</label>
            <input type="range" name="progress" value={formData.progress} onChange={handleChange} min={0} max={100} className="w-full" />
            <div className="h-2 bg-gray-700 rounded-full mt-1">
              <div className="h-full bg-rose-400 rounded-full" style={{ width: `${formData.progress}%` }} />
            </div>
          </div>

          <button type="submit" className="p-3 rounded-md bg-rose-400 text-black font-bold w-full">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
