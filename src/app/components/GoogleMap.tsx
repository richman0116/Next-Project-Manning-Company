const GoogleMap = () => {
  return (
    <div className="flex items-center justify-center w-auto flex-col pt-5 h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9324845688217!2d114.1684501!3d22.2956506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400ec9eb6f00d%3A0x1ffe11fbfb9cbb0f!2sManning%20Company%20-%20Best%20Custom%20Tailors%20in%20Kowloon%20Hong%20Kong!5e0!3m2!1sen!2s!4v1709282907766!5m2!1sen!2s"
        loading="lazy"
        allowFullScreen
        style={{ border: 0 }}
        className="w-full h-full"
        
      ></iframe>
    </div>
  );
};

export default GoogleMap;
