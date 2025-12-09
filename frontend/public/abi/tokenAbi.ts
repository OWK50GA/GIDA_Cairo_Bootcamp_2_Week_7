export const ERC20ABI = [
  {
    "type": "impl",
    "name": "ERC20Impl",
    "interface_name": "erc20::interfaces::ierc20::IERC20"
  },
  {
    "type": "struct",
    "name": "core::byte_array::ByteArray",
    "members": [
      {
        "name": "data",
        "type": "core::array::Array::<core::bytes_31::bytes31>"
      },
      { "name": "pending_word", "type": "core::felt252" },
      {
        "name": "pending_word_len",
        "type": "core::internal::bounded_int::BoundedInt::<0, 30>"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::integer::u256",
    "members": [
      { "name": "low", "type": "core::integer::u128" },
      { "name": "high", "type": "core::integer::u128" }
    ]
  },
  {
    "type": "enum",
    "name": "core::bool",
    "variants": [
      { "name": "False", "type": "()" },
      { "name": "True", "type": "()" }
    ]
  },
  {
    "type": "interface",
    "name": "erc20::interfaces::ierc20::IERC20",
    "items": [
      {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "type": "core::byte_array::ByteArray" }],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "type": "core::byte_array::ByteArray" }],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{ "type": "core::integer::u8" }],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "total_supply",
        "inputs": [],
        "outputs": [{ "type": "core::integer::u256" }],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "balance_of",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [{ "type": "core::integer::u256" }],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "allowance",
        "inputs": [
          {
            "name": "owner",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "spender",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [{ "type": "core::integer::u256" }],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "approve",
        "inputs": [
          {
            "name": "spender",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          { "name": "amount", "type": "core::integer::u256" }
        ],
        "outputs": [{ "type": "core::bool" }],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "transfer",
        "inputs": [
          {
            "name": "recipient",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          { "name": "amount", "type": "core::integer::u256" }
        ],
        "outputs": [{ "type": "core::bool" }],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "transfer_from",
        "inputs": [
          {
            "name": "sender",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "recipient",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          { "name": "amount", "type": "core::integer::u256" }
        ],
        "outputs": [{ "type": "core::bool" }],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "mint",
        "inputs": [
          {
            "name": "recipient",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          { "name": "amount", "type": "core::integer::u256" }
        ],
        "outputs": [{ "type": "core::bool" }],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": [
      { "name": "token_name", "type": "core::byte_array::ByteArray" },
      { "name": "symbol", "type": "core::byte_array::ByteArray" }
    ]
  },
  {
    "type": "event",
    "name": "erc20::erc20::ERC20::Transfer",
    "kind": "struct",
    "members": [
      {
        "name": "from",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "to",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      { "name": "amount", "type": "core::integer::u256", "kind": "data" }
    ]
  },
  {
    "type": "event",
    "name": "erc20::erc20::ERC20::Approval",
    "kind": "struct",
    "members": [
      {
        "name": "owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "spender",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      { "name": "value", "type": "core::integer::u256", "kind": "data" }
    ]
  },
  {
    "type": "event",
    "name": "erc20::erc20::ERC20::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "Transfer",
        "type": "erc20::erc20::ERC20::Transfer",
        "kind": "nested"
      },
      {
        "name": "Approval",
        "type": "erc20::erc20::ERC20::Approval",
        "kind": "nested"
      }
    ]
  }
] as const