import Message from "./Message";

const Messages = ({ messages }) => {
  return (
    <section className="messages">
      <div className="messages__list">
        {messages.map(({ sender, text }, index) => (
          <Message key={index} sender={sender} text={text} />
        ))}
      </div>
    </section>
  );
};

export default Messages;
