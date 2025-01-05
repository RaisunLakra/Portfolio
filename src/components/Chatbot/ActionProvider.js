class ActionProvider {
    constructor(createChatBotMessage) {
      this.createChatBotMessage = createChatBotMessage;
    }
  
    handleSkills = () => {
      const message = this.createChatBotMessage(
        "Here are my skills: C, C++, Python, JavaScript, SQL."
      );
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    handleProjects = () => {
      const message = this.createChatBotMessage(
        "I worked on: 1. Portfolio Website, 2. Chat Application."
      );
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    handleExperience = () => {
      const message = this.createChatBotMessage(
        "I have 6 months of experience as a Software Developer Intern at ABC Corp."
      );
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  }
  
  export default ActionProvider;
  