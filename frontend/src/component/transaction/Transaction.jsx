import "./Transaction.scss";

function Transaction({ title, amount, description }) {
    return (
        <div>
            <h2 class="sr-only">Accounts</h2>
            <section class="account">
                <div class="account-content-wrapper">
                    <h3 class="account-title">{title}</h3>
                    <p class="account-amount">{amount}</p>
                    <p class="account-amount-description">{description}</p>
                </div>
                <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                </div>
            </section>
        </div>
    )
}

export default Transaction