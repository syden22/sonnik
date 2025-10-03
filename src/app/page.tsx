export default function Home() {
  return (
    <main style={{padding: 40, fontFamily: "system-ui"}}>
      <h1>🌙 Сонник Онлайн</h1>
      <p>Опиши свой сон — скоро добавим толкование и картинку.</p>
      <form style={{marginTop: 20}}>
        <textarea rows={5} placeholder="Опишите сон..." style={{width: 500, maxWidth: "100%", padding: 10}} />
        <br />
        <button type="submit" style={{marginTop: 10, padding: "10px 16px"}}>Отправить</button>
      </form>
    </main>
  );
}
