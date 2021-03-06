/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/SDK_reference.md#payments
 */
export interface APIPartialPayment {
	/**
	 * The payment amount
	 */
	amount: number;

	/**
	 * A string provided by the developer, shown to the user
	 */
	memo: string;

	/**
	 * An object provided by the developer for their own usage
	 */
	metadata: Record<string, unknown>;
}

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#paymentdto
 */
export interface APIPayment extends APIPartialPayment {
	/**
	 * The payment identifier
	 */
	identifier: string;

	/**
	 * The user's app-specific ID
	 */
	user_uid: string;

	/**
	 * The recipient address of the blockchain transaction
	 */
	to_address: string;

	/**
	 * The payment's creation timestamp
	 */
	created_at: string;

	/**
	 * Status flags representing the current state of this payment
	 */
	status: APIPaymentStatus;

	/**
	 * Blockchain transaction data, this is null if no transaction has been made yet
	 */
	transaction: null | APIPaymentTransaction;
}

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#paymentdto
 */
export interface APIPaymentStatus {
	/**
	 * Server-Side Approval
	 */
	developer_approved: boolean;

	/**
	 * Blockchain transaction verified
	 */
	transaction_verified: boolean;

	/**
	 * Server-Side Completion
	 */
	developer_completed: boolean;

	/**
	 * Cancelled by the developer or by Pi Network
	 */
	cancelled: boolean;

	/**
	 * Cancelled by the user
	 */
	user_cancelled: boolean;
}

/**
 * https://github.com/pi-apps/pi-platform-docs/blob/master/platform_API.md#paymentdto
 */
export interface APIPaymentTransaction {
	/**
	 * The id of the blockchain transaction
	 */
	txid: string;

	/**
	 * True if the transaction matches the payment, false otherwise
	 */
	verified: boolean;

	/**
	 * A link to the operation on the Blockchain API
	 */
	_link: string;
}
